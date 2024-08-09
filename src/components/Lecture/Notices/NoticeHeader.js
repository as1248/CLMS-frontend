import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoticeHeader = () => {
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();
    return (
    <Content>
      <Title>공지사항</Title>
      {userRole === 'ROLE_MANAGER' ? (
      <Button variant='contained' onClick={()=>navigate('createNotice')} style={{width:'80px' ,height:'40px'}}>글쓰기</Button>
      ):(<></>)}
    </Content>
  );
};

export default NoticeHeader;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 30px;
`;