import styled from "styled-components";
import NoticeButton from "./NoticeButton";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LectureNav from "../LectureNav";
import { useMutation } from "react-query";
import { deleteNotice } from "../../../API/Lecture";

const Notice = () => {
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();
  const { lectureId ,noticeId } = useParams();
  const { state } = useLocation();

  const { mutate, isError, error, isSuccess } = useMutation(()=>deleteNotice(noticeId));

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if(isSuccess){
    navigate(`/${lectureId}/notice`);
  }

  return (
    <Content>
      <LectureNav title={state.item.title}/>
      <Box>
        <Btns>
          <NoticeButton/>
          {userRole === 'ROLE_MANAGER' ? (
            <Button variant="outlined" color="error" onClick={mutate}>삭제</Button>
          ):<></>}
        </Btns>
        <Container>
          <ManageBar/>
          <Detail>
            <Title>{state.item.title}</Title>
            <div>{state.item.content}</div>
          </Detail>
        </Container>
      </Box>
    </Content>
  );
};

export default Notice;

const Content = styled.div`
  width: 100%;
  height: 96.5vh;
  padding: 2% 0;
`;

const Box = styled.div`
  background-color: white;
  padding: 2%;
  height: 100%;
  min-width: 800px;
  min-height: 600px;
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

