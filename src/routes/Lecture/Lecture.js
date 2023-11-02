import styled from "styled-components";
import Header from "../../components/Header";
import LectureHome from "../../components/Lecture/Lecture/LectureHome";
import LectureNavBar from "../../components/Lecture/LectureNavBar";

const Lecture = () => {
  localStorage.removeItem('instanceId');
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <LectureHome />
      </Content>
    </>
  );
};

export default Lecture;

const Content = styled.div`
  min-height: 95vh;
  display: flex;
`;
