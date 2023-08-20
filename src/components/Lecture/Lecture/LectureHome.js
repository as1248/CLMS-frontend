import { List } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const LectureHome = () => {
  const [studentList, setStudentList] = useState([{
    studentID: 123123
  },{
    studentID: 123123
  },{
    studentID: 123123
  },{
    studentID: 123123
  },{
    studentID: 123123
  },{
    studentID: 123123
  }]);
  return (
    <Section>
      <Top>
        <Title>웹 프로그래밍</Title>
        <Info>컴퓨터 과학 전공자로서 알아야 할 웹프로그래밍 기초 내용으로 클라이언트 중심의 프로그래밍 영역인 HTML, CSS, 자바스크립트를 기본으로 사용하는 법을 배운다. HTML5에 기반을 둔 콘텐츠 작성 방법, 콘텐츠의 스타일을 지정하는 CSS3, 자바스크립트 학습을 통해 동적인 웹페이지를 구축한다. 또한, 자바스크립트를 서버에서 사용하기 위해 node와 express를 학습한다.</Info>
      </Top>
      <Bottom>
        <Title>학생 목록</Title>
        <StudentHeader>
          <StudentName>이름</StudentName>
          <StudentID>학번</StudentID>
        </StudentHeader>
        <List sx={{overflow: 'auto', maxHeight: 300}}>
          {studentList?.map((item) => {
            return (
              <Student>
                <StudentName key={item?.name}>
                  {item?.name}
                </StudentName>
                <StudentID key={item?.studentID}>
                  {item?.studentID}
                </StudentID>
              </Student>
            );
          })}
        </List>
      </Bottom>
    </Section>
  );
};
export default LectureHome;

const Section = styled.section`
  border: 1px solid black;
  width: 100%;
  padding: 3%;
  `;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 80%;
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
