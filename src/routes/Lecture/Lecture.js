import styled from "styled-components";
import Header from "../../components/Header";
import { useState } from "react";
import LectureHome from "../../components/Lecture/Lecture/LectureHome";
import InstanceList from "../../components/Lecture/Lecture/InstanceList";
import { FaBook, FaBullhorn } from "react-icons/fa";
import { GoContainer } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

//관리자일때와 학생일때 구분해서 만들기
const Lecture = () => {
  const [nav, setNav] = useState(1);
  const [fold, setFold] = useState(false);
  
  return (
    <>
      <Header />
      <Content>
        {fold ? (
          //접혔을 때
        <FoldNav>
          <div>
            <NavItem onClick={()=>setNav(1)}>
              <FaBook size={24}/>
            </NavItem>
            <NavItem onClick={()=>setNav(2)}>
              <FaBullhorn size={24}/>
            </NavItem>
            <NavItem onClick={()=>setNav(3)}>
              <GoContainer size={24}/>
            </NavItem>
          </div>
          <LastNavItem onClick={()=>setFold(false)}>
            <BsArrowRight size={32}/>
          </LastNavItem>
        </FoldNav>
        ) : (
          //펼쳤을 때
        <Nav>
          <div>
            <NavItem onClick={()=>setNav(1)}>
              <FaBook size={32}/>
              <div>강의 홈</div>
            </NavItem>
            <NavItem onClick={()=>setNav(2)}>
              <FaBullhorn size={32}/>
              <div>공지사항</div>
            </NavItem>
            <NavItem onClick={()=>setNav(3)}>
              <GoContainer size={32}/>
              <div>인스턴스</div>
            </NavItem>
          </div>
          <LastNavItem onClick={()=>setFold(true)}>
            <BsArrowLeft size={32}/>
          </LastNavItem>
        </Nav>)}
        
        {nav === 1 ? (
          //강의 홈
          <LectureHome />
        ) : nav === 2 ? (
          // 공지사항
          <Section>
            <Title>공지사항</Title>
          </Section>
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
  min-height: 90vh;
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
