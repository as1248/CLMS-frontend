import { List } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

const LectureHome = () => {
  const { lectureId } = useParams();
  const [lectureDetail, setLectureDetail] = useState({});
  const navigate = useNavigate();
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: '강동현',
      studentId: 2018010837,
    },
    {
      id: 2,
      name: '이건호',
      studentId: 2018010836,
    },
  ]);

  useEffect(()=>{
    try{
      axios.get(`/lecture/detail?id=${lectureId}`).then((response)=>setLectureDetail(response.data));
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  useEffect(()=>{
    try{
      axios.get(`/lecture/student?id=${lectureId}`).then((response)=>console.log(response.data.studentList));
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
          <Button variant="contained" onClick={()=>navigate('approveEnrolment')} style={{height:'35px'}}>수강신청 목록</Button>
        </Header>
        <StudentHeader>
          <StudentName>이름</StudentName>
          <StudentID>학번</StudentID>
        </StudentHeader>
        <List sx={{ overflow: "auto", maxHeight: 300 }}>
          {studentList?.map((item) => {
            return (
              <Student key={item.id}>
                <StudentName>{item?.name}</StudentName>
                <StudentID>{item?.studentId.toString().slice(0,4)+'******'}</StudentID>
              </Student>
            );
          })}
        </List>
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
  font-size: 24px;
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

const Student = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
`;

const StudentHeader = styled(Student)`
  border-bottom: 1px solid black;
  margin-bottom: 30px;
`;

const StudentName = styled.div`
  width: 50%;
  text-align: center;
`;
const StudentID = styled.div`
  width: 50%;
  text-align: center;
`;
