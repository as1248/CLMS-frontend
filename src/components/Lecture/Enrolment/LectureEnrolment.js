import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const LectureEnrolment = () => {
  const departmentId = localStorage.getItem('departmentId');
  const [lectureList,setLectureList] = useState([]);

  const enrolment = (lectureId,lectureName,index) => {
    const btn = document.querySelectorAll('.button');
    if(window.confirm(`${lectureName} 강의의 수강신청을 하시겠습니까?`)){
      axios.post(`/lecture/student`,{lectureId}).then(response=>{
        if(response.status === 200){
          btn[index].style.pointerEvents = "none";
          btn[index].style.backgroundColor = 'gray';
        }
      });
    }else{
      return;
    }
  }

  useEffect(()=>{
    try{
      axios.get(`/lecture?departmentId=${departmentId}`).then((response)=>setLectureList(response.data.lectureList));
    } catch (error) {
      console.error(error);
    };
  },[]);

  return (
    <List>
      {lectureList?.length === 0 ? (
        <NoLecture>진행중인 강의가 없습니다.</NoLecture>
      ) : (
        lectureList.map((i)=>{
          return(
            <Lecture key={i?.id}>
              <Title>{i?.lectureName}</Title>
              <Button className="button" onClick={()=>enrolment(i?.id,i?.lectureName,lectureList.indexOf(i))} variant="contained" style={{backgroundColor:'#6967c7', color:'white', cursor:'pointer', fontSize:'16px', width:'12%', minWidth:'180px', borderRadius:'25px'}}>수강신청하기</Button>
            </Lecture>
          )
        }))
      }
    </List>
  );
}
export default LectureEnrolment;

const List = styled.div`
  margin: 2%;
  margin-left: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`;

const NoLecture = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 50px;
  font-weight: bold;
  color: gray;
`

const Lecture = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  min-width: 250px;
  padding-left: 20px;
  font-size: 24px;
  border-right: 1px solid black;
`;