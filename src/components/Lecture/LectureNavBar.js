import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaBook, FaBullhorn } from "react-icons/fa";
import { GoContainer } from "react-icons/go";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LectureNavBar = () => {
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();
  const [fold, setFold] = useState(false);
  const { lectureId } = useParams();
  return (
    <>
      {fold ? (
        //접혔을 때
        <FoldNav>
          <div>
            <NavItem onClick={() => navigate(`/${lectureId}`)}>
              <FaBook size={24} />
            </NavItem>
            <NavItem onClick={() => navigate(`/${lectureId}/notice`)}>
              <FaBullhorn size={24} />
            </NavItem>
            {userRole === 'ROLE_MANAGER' ? (
              <NavItem onClick={() => navigate(`/${lectureId}/instances`)}>
                <GoContainer size={24} />
              </NavItem>
            ) : (
              <NavItem onClick={() => navigate(`/${lectureId}/instanceDetail`)}>
                <GoContainer size={24} />
              </NavItem>
            )}
            
          </div>
          <LastNavItem onClick={() => setFold(false)}>
            <BsArrowRight size={32} />
          </LastNavItem>
        </FoldNav>
      ) : (
        //펼쳤을 때
        <Nav>
          <div>
            <NavItem onClick={() => navigate(`/${lectureId}`)}>
              <FaBook size={32} />
              <div>강의 홈</div>
            </NavItem>
            <NavItem onClick={() => navigate(`/${lectureId}/notice`)}>
              <FaBullhorn size={32} />
              <div>공지사항</div>
            </NavItem>
            {userRole === 'ROLE_MANAGER' ? (
              <NavItem onClick={() => navigate(`/${lectureId}/instances`)}>
                <GoContainer size={32} />
                <div>인스턴스</div>
              </NavItem>
            ) : (
              <NavItem onClick={() => navigate(`/${lectureId}/instanceDetail`)}>
                <GoContainer size={32} />
                <div>인스턴스</div>
              </NavItem>
            )}
          </div>
          <LastNavItem onClick={() => setFold(true)}>
            <BsArrowLeft size={32} />
          </LastNavItem>
        </Nav>
      )}
    </>
  );
};

export default LectureNavBar;

const Nav = styled.nav`
  background-color: #4b6586;
  width: 120px;
  min-width: 90px;
  height: 100vh;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FoldNav = styled(Nav)`
  width: 60px;
  min-width: 40px;
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
