import styled from "styled-components";
import Header from "../../components/Header";
import LectureNav from "../../components/Lecture/LectureNav";
import NoticeList from "../../components/Lecture/Notices/NoticeList";

const Notices = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNav />
        <NoticeList />
      </Content>
    </>
  );
};

export default Notices;

const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
`;
