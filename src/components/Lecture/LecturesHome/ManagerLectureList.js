import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ManagerLectureList = () => {
  const departmentId = localStorage.getItem('departmentId');
  
  const navigate = useNavigate();
  const [lectureList,setLectureList] = useState([]);

useEffect(()=>{
    try{
      axios.get(`/lecture?departmentId=${departmentId}`).then((response)=>setLectureList(response.data.lectureList));
    } catch (error) {
      console.error(error);
    };
  },[]);
  

  return (
    <List>
      {lectureList?.map((i)=>{
        return(
          <Lecture key={i?.id}>
            <Title>{i.lectureName}</Title>
            <Todos>
              <Todo>
                <div>공지</div>
                <div style={{color:'silver'}}>{i?.noticeCount}</div>
              </Todo>
            </Todos>
            <LectureBtn onClick={()=>navigate(`/${i?.id}`)}>
              과목 홈 바로가기 <BsArrowRight size={24} />
            </LectureBtn>
          </Lecture>
        )
      })}
      <CreateLectureBtn onClick={()=>navigate('/createLecture')}>강의 생성하기 +</CreateLectureBtn>
    </List>
  );
};

export default ManagerLectureList;

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

const Lecture = styled.div`
  display: flex;
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
  padding-left: 20px;
  font-size: 24px;
  border-right: 1px solid black;
`;

const Todos = styled.div`
  display: flex;
  width: 60%;
  margin-left: 30px;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

const LectureBtn = styled.div`
  float: right;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 45px;
  border-radius: 25px;
  color: white;
  background-color: #6967c7;
  font-size: 16px;
`;

const CreateLectureBtn = styled(Lecture)`
  cursor: pointer;
  width: 20%;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
