import styled from "styled-components";
import NoticeButton from "./NoticeButton";
import { Button } from "@mui/material";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Notice = () => {
  const userRole = localStorage.getItem('userRole');
  const { noticeId } = useParams();
  const { state } = useLocation();
  console.log(state.item);

  const deleteNotice = () => {
    if(window.confirm('해당 공지사항을 삭제하시겠습니까?')){
      axios.delete(`/lecture/notice?id=${noticeId}`).then((response)=>console.log(response));
    }else{
      return;
    }
  }

  return (
    <Content>
      <Box>
        <Btns>
          <NoticeButton/>
          {userRole === 'ROLE_MANAGER' ? (
            <Button variant="outlined" color="error" onClick={deleteNotice}>삭제</Button>
          ):<></>}
        </Btns>
        <Container>
          <ManageBar/>
          <Detail>
            <Title>{state.item.title}</Title>
            <div>공지사항입니다.</div>
          </Detail>
        </Container>
      </Box>
    </Content>
  );
};

export default Notice;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const Box = styled.div`
  background-color: white;
  padding: 3%;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Container = styled.div`
`;

const ManageBar = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #cdd2d5;
  border-bottom: none;
  height: 60px;
`;

const Detail = styled.div`
  padding: 3%;
  border: 1px solid #cdd2d5;
  padding-bottom: 80px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
`;

