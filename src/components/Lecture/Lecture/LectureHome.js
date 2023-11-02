import { List } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

const LectureHome = () => {
  const userRole = localStorage.getItem('userRole');
  const { lectureId } = useParams();
  const [lectureDetail, setLectureDetail] = useState({});
  const navigate = useNavigate();
  const [studentList, setStudentList] = useState([]);

  useEffect(()=>{
    try{
      axios.get(`/lecture/detail?id=${lectureId}`).then((response)=>setLectureDetail(response.data));
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  useEffect(()=>{
    try{
      axios.get(`/lecture/student?id=${lectureId}`).then((response)=>setStudentList(response.data.studentList));
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  return (
    <Content>
      <Top>
        <Title>{lectureDetail?.lectureName}</Title>
        <Info>
          {lectureDetail?.introducing}
        </Info>
      </Top>
      <Bottom>
        <Header>
          <Title>학생 목록</Title>
          {userRole === 'ROLE_MANAGER' ? (
            <Button variant="contained" onClick={()=>navigate('approveEnrolment')} style={{height:'35px'}}>수강신청 목록</Button>
          ):(<></>)}
        </Header>
        {studentList.length === 0 ? (
          <NoStudent>해당 강의에 등록된 학생이 없습니다.</NoStudent>
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
        
      </Bottom>
    </Content>
  );
};
export default LectureHome;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
  font-size: 18px;
`;

const Top = styled.div`
  background-color: white;
  padding: 2%;
  margin-bottom: 30px;
`;
const Bottom = styled.div`
  background-color: white;
  padding: 2%;
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
