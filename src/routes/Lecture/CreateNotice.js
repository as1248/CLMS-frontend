import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import CreateNoticeContent from "../../components/Lecture/CreateNotice/CreateNoticeContent";

const CreateNotice = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <CreateNoticeContent/>
      </Content>
    </>
  );
};

export default CreateNotice;

const Content = styled.div`
  width: 100%;
  display: flex;
`;