import styled from "styled-components";
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import LectureList from "../components/Main/LectureList";
import ServerList from "../components/Main/ServerList";

const Main = () => {
  //관리자일때와 학생일때 구분해서 만들기
  return (
    <>
      <Header />
      <Content>
        <Title>진행중인 강의</Title>
        <LectureList/>
        <Title>서버</Title>
        <ServerList/>
      </Content>
      <Footer/>
    </>
  );
};

export default Main;

const Content = styled.div`
  padding-top: 30px;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 120px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin: 3%;
  margin-left: 5%;
`;