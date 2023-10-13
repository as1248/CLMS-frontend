import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ManagerHeader = ({ handleLogout }) => {
  const navigate = useNavigate();
  return (
    <ButtonGroup>
      <HeaderBtn onClick={() => navigate("/lecturesHome")}>강의 목록</HeaderBtn>
      <HeaderBtn>설명서</HeaderBtn>
      <LogoutBtn onClick={() => handleLogout()}>로그아웃</LogoutBtn>
    </ButtonGroup>
  );
};

export default ManagerHeader;

const HeaderBtn = styled.button`
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

const LogoutBtn = styled(HeaderBtn)`
  background-color: #3eb5c4;
  border: 2px #3eb5c4 solid;
  border-radius: 20px;
  margin-right: 20px;
  &:hover {
    background-color: #2da4b3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
