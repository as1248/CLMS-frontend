import styled from "styled-components";
import Header from "../../components/Header";
import LectureHome from "../../components/Lecture/Lecture/LectureHome";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import Footer from "../../components/Footer";

const Lecture = () => {
  localStorage.removeItem('instanceId');
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <LectureHome />
      </Content>
      <Footer />
    </>
  );
};

export default Lecture;

const Content = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
`;
