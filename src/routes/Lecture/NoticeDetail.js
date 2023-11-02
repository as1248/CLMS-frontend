import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import Notice from "../../components/Lecture/NoticeDetail/Notice";

const NoticeDetail = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <Notice />
      </Content>
    </>
  );
};

export default NoticeDetail;

const Content = styled.div`
  width: 100%;
  display: flex;
`;