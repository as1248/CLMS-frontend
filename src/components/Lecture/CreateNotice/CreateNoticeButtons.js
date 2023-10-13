import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CreateNoticeButtons = ({data, setData}) => {
  const navigate = useNavigate();
  const {lectureId} = useParams();
  const postNotice = () => {
    setData({...data, createdAt: Date.now()});
    try{
      axios.post('/lecture/notice', data).then(()=>navigate(`/${lectureId}/notice`));
    } catch (error) {
      console.error(error);
      console.log(data);
    }
    
  }

  return (
    <Content>
      <Button onClick={()=>navigate(`/${lectureId}/notice`)}>취소</Button>
      <Button onClick={postNotice} variant="contained" style={{marginLeft:'20px'}}>등록</Button>
    </Content>
  );
};

export default CreateNoticeButtons;

const Content = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 25px;
`;