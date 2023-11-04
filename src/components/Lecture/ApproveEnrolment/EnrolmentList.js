import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const EnrolmentList = () => {
  const { lectureId } = useParams();
  const [list,setList] = useState([]);

  const approve = (id) => {

    if(window.confirm('승인하시겠습니까?')){
      try{
        axios.post(`lecture/student/registration`,{lectureId, id}).then(response=>console.log(response));
      } catch (error) {
        console.error(error);
      };
    }else{
      return;
    }
    
  }

  const refuse = (id) => {
    if(window.confirm('거절하시겠습니까?')){
      try{
        axios.post(`lecture/student/refusal`,{lectureId, id}).then(response=>console.log(response));
      } catch (error) {
        console.error(error);
      };
    }else{
      return;
    }
    
  }

  useEffect(()=>{
    try{
      axios.get(`/lecture/student/register?id=${lectureId}`).then((response)=>setList(response.data.studentList));
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  return (
    <Content>
      <List>
        <Title>수강신청 승인</Title>
        {list.length === 0 ? (
          <NoStudent>해당 강의에 수강신청 한 학습자가 없습니다.</NoStudent>
        ) : (
          <>
            <StudentHeader>
              <StudentCount> </StudentCount>
              <StudentName>이름</StudentName>
              <StudentID>학번</StudentID>
              <Approve> </Approve>
              <Approve> </Approve>
            </StudentHeader>
            {list?.map((item)=>{
              return (
                <Student key={item?.id}>
                  <StudentCount>{list.indexOf(item)+1}</StudentCount>
                  <StudentName>{item?.name}</StudentName>
                  <StudentID>{item?.studentId}</StudentID>
                  <Approve>
                    <Button onClick={()=>approve(item?.id)} variant="contained" style={{height:'35px'}}>승인</Button>
                  </Approve>
                  <Approve>
                    <Button onClick={()=>refuse(item?.id)} variant="outlined" color="error" style={{height:'35px'}}>거절</Button>
                  </Approve>
                </Student>
              );
            })}
          </>
        )}
      </List>
    </Content>
  );
}
export default EnrolmentList;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const List = styled.div`
  background-color: white;
  padding: 2%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const NoStudent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 50px;
  font-weight: bold;
  color: gray;
`;

const Student = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
`;

const StudentHeader = styled(Student)`
  border-bottom: 1px solid black;
  margin-bottom: 30px;
`;

const StudentCount = styled.div`
  width: 10%;
  text-align: center;
`;

const StudentName = styled.div`
  width: 35%;
  text-align: center;
`;

const StudentID = styled.div`
  width: 35%;
  text-align: center;
`;

const Approve = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;