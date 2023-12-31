import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import EnrolmentList from "../../components/Lecture/ApproveEnrolment/EnrolmentList";
import Footer from "../../components/Footer";

const ApproveEnrolment = () => {
  return (
    <>
      <Header/>
      <Content>
        <LectureNavBar/>
        <EnrolmentList/>
      </Content>
      <Footer/>
    </>
  );
}
export default ApproveEnrolment;

const Content = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
`;