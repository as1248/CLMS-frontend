import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LectureList from "../../components/Lecture/LecturesHome/LectureList";
import ServerList from "../../components/Lecture/LecturesHome/ServerList";

//학생, 관리자 구분해서 만들기
const LecturesHome = () => {
  const userRole = localStorage.getItem('userRole');

  return (
    <>
      <Header />
      {userRole === 'ROLE_MANAGER' ? (
        <Content>
          <Title>진행중인 강의</Title>
          <LectureList />
          <Title>서버</Title>
          <ServerList />
        </Content>
      ) : (
        <Content>
          <Title>수강중인 강의</Title>
          <LectureList />
        </Content>
      )}
      <Footer />
    </>
  );
};

export default LecturesHome;

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
