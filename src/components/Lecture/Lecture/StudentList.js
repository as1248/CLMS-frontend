import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { List } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const StudentList = () => {
  const userRole = localStorage.getItem('userRole');
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const [studentList, setStudentList] = useState([]);

  useEffect(()=>{
    try{
      axios.get(`/lecture/student?id=${lectureId}`).then((response)=>setStudentList(response.data.studentList));
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  return (
    <Content>
      <Header>
        <Title>학생 목록</Title>
        {userRole === 'ROLE_MANAGER' ? (
          <Button variant="contained" onClick={()=>navigate('approveEnrolment')} style={{height:'35px'}}>수강신청 목록</Button>
        ):(<></>)}
      </Header>
      {studentList.length === 0 ? (
        <NoStudent>해당 강의에 등록된 학습자가 없습니다.</NoStudent>
      ) : (
        <>
          <StudentHeader>
            <StudentCount> </StudentCount>
            <StudentName>이름</StudentName>
            <StudentID>학번</StudentID>
          </StudentHeader>
          <List sx={{ overflow: "auto", maxHeight: 300 }}>
            {studentList?.map((item) => {
              return (
                <Student key={item?.studentId}>
                  <StudentCount>{studentList.indexOf(item)+1}</StudentCount>
                  <StudentName>{item?.name}</StudentName>
                  <StudentID>{item?.studentId}</StudentID>
                </Student>
              );
            })}
          </List>
        </>
      )}
    </Content>
  );
}

export default StudentList;

const Content = styled.div`
  background-color: white;
  padding: 2%;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 45%;
  text-align: center;
`;

const StudentID = styled.div`
  width: 45%;
  text-align: center;
`;
