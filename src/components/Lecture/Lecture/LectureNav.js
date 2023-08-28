import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaBook, FaBullhorn } from "react-icons/fa";
import { GoContainer } from "react-icons/go";
import { useState } from "react";

const LectureNav = ({setNav}) => {
    
  const [fold, setFold] = useState(false);
    return (
        <>
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
        </>
    );
};

export default LectureNav;

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
  cursor: pointer;
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