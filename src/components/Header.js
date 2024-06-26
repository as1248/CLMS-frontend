import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./Header/AdminHeader";
import ManagerHeader from "./Header/ManagerHeader";
import StudentHeader from "./Header/StudentHeader";
import { removeCookieToken } from "../routes/Cookie";

const Header = () => {
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    removeCookieToken();
    navigate('/login');
  };

  return (
    <HeaderContent>
      <HeaderLogo onClick={() => navigate('/')}>
        <Logo src={process.env.PUBLIC_URL + '/CLMS_icon.png'} alt="CLMS로고"/>
        <div>CLMS</div>
      </HeaderLogo>
      <div style={{marginRight:'50px'}}>
        {(userRole === null) ? (
          /* 비로그인 상태 */
          <>
            <DocsBtn onClick={() => navigate("/documents/")}>설명서</DocsBtn>
            <HeaderBtn onClick={() => navigate('/login')}>로그인</HeaderBtn>
          </>
          ) : (userRole === 'ROLE_ADMIN') ? (
          /* 어드민 */
          <AdminHeader handleLogout={handleLogout}/>
          ) : 
          (userRole === 'ROLE_MANAGER') ? (
          /* 관리자 */
          <ManagerHeader handleLogout={handleLogout}/>
          ) : (
          /* 학생 */
          <StudentHeader handleLogout={handleLogout}/>
          )
        }
      </div>
    </HeaderContent>
  );
};

export default Header;

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 900px;
  height: 60px;
  padding: 2%;
  background-color: #232f3e;
  color: white;
`;

const HeaderLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
  object-fit: contain;
`;

const HeaderBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: #3eb5c4;
  border: 2px #3eb5c4 solid;
  border-radius: 20px;
  margin-right: 20px;
  transition: all 0.4s;
  &:hover{
    background-color: #2da4b3;
  }
`;

const DocsBtn = styled.button`
cursor: pointer;
width: 100px;
height: 35px;
font-size: 16px;
font-weight: 600;
color: white;
background-color: rgba(0,0,0,0);
margin-left: 10px;
border: none;
`;