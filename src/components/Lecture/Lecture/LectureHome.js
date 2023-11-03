import styled from "styled-components";
import StudentList from "./StudentList";
import LectureIntroduction from "./LectureIntroduction";

const LectureHome = () => {
  return (
    <Content>
      <LectureIntroduction/>
      <StudentList/>
    </Content>
  );
};
export default LectureHome;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;