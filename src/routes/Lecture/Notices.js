import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import NoticeList from "../../components/Lecture/Notices/NoticeList";
import Footer from "../../components/Footer";

const Notices = () => {
  localStorage.removeItem('instanceId');
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <NoticeList />
      </Content>
      <Footer/>
    </>
  );
};

export default Notices;

const Content = styled.div`
  display: flex;
  height: auto;
  min-height: 100%;
`;
