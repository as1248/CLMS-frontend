import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoticeHeader = ({setDeleteNotice}) => {
  const navigate = useNavigate();
    return (
    <Content>
      <Title>공지사항</Title>
      <Buttons>
        <Button variant='contained' color='error' onClick={()=>setDeleteNotice((prev)=>!prev)}>삭제</Button>
        <Button variant='contained' onClick={()=>navigate('createNotice')}>글쓰기</Button>
      </Buttons>
    </Content>
  );
};

export default NoticeHeader;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 15%;

`;