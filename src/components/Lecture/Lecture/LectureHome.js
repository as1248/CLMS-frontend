import { List } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../../../Atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const LectureHome = () => {
  const [BASEURL,] = useRecoilState(baseUrl);
  const [lectureDetail, setLectureDetail] = useState({
    lectureName: "Web Programing",
    introducing:"웹프 강의 입니다. "
  });

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

  const loadLectureDetail = () => {
    try{
      axios.get(BASEURL + '/lecture/detail?id=1').then((response)=>console.log(response));
    } catch (error) {
      console.error(error);
    };
  }

  useEffect(()=>{
    loadLectureDetail();
  },[BASEURL]);

  return (
    <Content>
      <Top>
        <Title>{lectureDetail?.lectureName}</Title>
        <Info>
          {lectureDetail?.introducing}
        </Info>
      </Top>
      <Bottom>
        <Title>학생 목록</Title>
        <StudentHeader>
          <StudentName>이름</StudentName>
          <StudentID>학번</StudentID>
        </StudentHeader>
        <List sx={{ overflow: "auto", maxHeight: 300 }}>
          {studentList?.map((item) => {
            return (
              <Student key={item.id}>
                <StudentName>{item?.name}</StudentName>
                <StudentID>{item?.studentId}</StudentID>
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
