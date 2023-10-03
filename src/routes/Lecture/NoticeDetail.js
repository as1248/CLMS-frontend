import styled from "styled-components";
import Header from "../../components/Header";
import LectureNav from "../../components/Lecture/LectureNav";
import { useParams } from "react-router-dom";
import Notice from "../../components/Lecture/NoticeDetail/Notice";

const NoticeDetail = () => {
  const {noticeId} = useParams();
  return (
    <>
      <Header />
      <Content>
        <LectureNav />
        <Notice />
      </Content>
    </>
  );
};

export default NoticeDetail;

const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
`;