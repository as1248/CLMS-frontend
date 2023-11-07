import styled from "styled-components";
import Header from "../../components/Header";
import LectureEnrolment from "../../components/Lecture/Enrolment/LectureEnrolment";
import Footer from "../../components/Footer";

const Enrolment = () => {
  return (
    <>
      <Header/>
      <Content>
        <Title>수강 신청</Title>
        <LectureEnrolment/>
      </Content>
      <Footer/>
    </>
  );
}
export default Enrolment;

const Content = styled.div`
  width: 100%;
  height: 90vh;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin: 3%;
  margin-left: 5%;
`;
