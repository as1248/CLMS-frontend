import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import EnrolmentList from "../../components/Lecture/ApproveEnrolment/EnrolmentList";

const ApproveEnrolment = () => {
  return (
    <>
      <Header/>
      <Content>
        <LectureNavBar/>
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