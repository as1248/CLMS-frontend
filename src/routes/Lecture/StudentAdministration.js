import styled from "styled-components";
import Header from "../../components/Header";
import { useState } from "react";
import Footer from "../../components/Footer";

const StudentAdministration = () => {
  const [studentList,setStudentList] = useState([]);
  return (
    <>
      <Header />
      <Content>
        <Title>학생 관리</Title>
        <SubTitle>
          <span>학과 : 컴퓨터과학과</span>
          <span>강의명 : 웹 프로그래밍</span>
        </SubTitle>
        <StudentList>
          <StudentHeader>
            <StudentContent>학번</StudentContent>
            <StudentContent>이름</StudentContent>
            <StudentContent>가입일</StudentContent>
            <StudentContent> </StudentContent>
            
          </StudentHeader>
          {/* 일정 길이 이상이면 스크롤로 만들기 */}
          <Student>
            <StudentContent>********10</StudentContent>
            <StudentContent>asd</StudentContent>
            <StudentContent>2023/02/23</StudentContent>
            <StudentContent>
              <DeleteBtn>삭제</DeleteBtn>
            </StudentContent>
          </Student>
         
        </StudentList>
      </Content>
      <Footer/>
    </>
  );
};

export default StudentAdministration;

const Content = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 2%;
`;

const Title = styled.div`
  margin: 2%;
  font-size: 32px;
`;

const SubTitle = styled.div`
  margin-left: 3%;
  margin-bottom: 3%;
  font-size: 24px;
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const StudentList = styled.div`
  width: 90%;
  padding: 2%;
  align-self: center;
  background-color: white;
`;

//Student 내부 div들 크기 정해서 text 가운데 정렬하기
const Student = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const StudentHeader = styled(Student)`
  border-bottom: 1px solid black;
  padding-bottom: 2%;
`;

const StudentContent = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

const DeleteBtn = styled.div`
  cursor: pointer;
  width: 25%;
  padding: 1%;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
`;