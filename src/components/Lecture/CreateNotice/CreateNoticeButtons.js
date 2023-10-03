import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CreateNoticeButtons = () => {
  const navigate = useNavigate();
  const {lectureId} = useParams();
  return (
    <Content>
      <Button onClick={()=>navigate(`/${lectureId}/notice`)} >취소</Button>
      <Button onClick={()=>navigate(`/${lectureId}/notice`)} variant="contained" style={{marginLeft:'20px'}}>등록</Button>
    </Content>
  );
};

export default CreateNoticeButtons;

const Content = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 25px;
`;