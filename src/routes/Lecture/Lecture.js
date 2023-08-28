import styled from "styled-components";
import Header from "../../components/Header";
import { useState } from "react";
import LectureHome from "../../components/Lecture/Lecture/LectureHome";
import InstanceList from "../../components/Lecture/Lecture/InstanceList";
import LectureNav from "../../components/Lecture/Lecture/LectureNav";
import Notice from "../../components/Lecture/Lecture/Notice";

//관리자일때와 학생일때 구분해서 만들기
const Lecture = () => {
  const [nav, setNav] = useState(1);
  return (
    <>
      <Header />
      <Content>
        <LectureNav setNav={setNav}/>
        
        {nav === 1 ? (
          //강의 홈
          <LectureHome />
        ) : nav === 2 ? (
          // 공지사항
          <Notice/>
        ) : (
          // 인스턴스
          <InstanceList />
        )}
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

const Nav = styled.nav`
  background-color: #4b6586;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FoldNav = styled(Nav)`
  width: 60px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  color: white;
`;

const LastNavItem = styled(NavItem)`
  height: 30px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  width: 100%;
  padding: 4%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;
