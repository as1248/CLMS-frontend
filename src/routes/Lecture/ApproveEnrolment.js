import styled from "styled-components";
import Header from "../../components/Header";
import LectureNav from "../../components/Lecture/LectureNav";
import EnrolmentList from "../../components/Lecture/ApproveEnrolment/EnrolmentList";

const ApproveEnrolment = () => {
  return (
    <>
      <Header/>
      <Content>
        <LectureNav/>
        <EnrolmentList/>
      </Content>
    </>
  );
}
export default ApproveEnrolment;

const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
`;