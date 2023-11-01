import styled from "styled-components";
import Header from "../../components/Header";
import LectureHome from "../../components/Lecture/Lecture/LectureHome";
import LectureNav from "../../components/Lecture/LectureNav";

const Lecture = () => {
  localStorage.removeItem('instanceId');
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
