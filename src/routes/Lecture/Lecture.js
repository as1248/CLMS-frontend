import styled from "styled-components";
import Header from "../../components/Header";
import LectureHome from "../../components/Lecture/Lecture/LectureHome";
import LectureNav from "../../components/Lecture/LectureNav";

//관리자일때와 학생일때 구분해서 만들기
const Lecture = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNav />
        <LectureHome />
      </Content>
    </>
  );
};

export default Lecture;

const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
`;
