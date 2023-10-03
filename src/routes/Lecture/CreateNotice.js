import styled from "styled-components";
import Header from "../../components/Header";
import LectureNav from "../../components/Lecture/LectureNav";
import CreateNoticeContent from "../../components/Lecture/CreateNotice/CreateNoticeContent";

const CreateNotice = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNav />
        <CreateNoticeContent/>
      </Content>
    </>
  );
};

export default CreateNotice;

const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
`;