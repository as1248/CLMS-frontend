import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import CreateNoticeContent from "../../components/Lecture/CreateNotice/CreateNoticeContent";
import Footer from "../../components/Footer";

const CreateNotice = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <CreateNoticeContent/>
      </Content>
      <Footer/>
    </>
  );
};

export default CreateNotice;

const Content = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
`;