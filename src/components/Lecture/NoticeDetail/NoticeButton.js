import { Button, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { BsList } from "react-icons/bs";

const NoticeButton = () => {
  const navigate = useNavigate();
  const { lectureId } = useParams();
  return (
    <Btn onClick={()=>navigate(`/${lectureId}/notice`)}>
      <BsList size={24}/>
      공지사항 목록으로
    </Btn>
    );
};

export default NoticeButton;

const Btn = styled(Button)({
  backgroundColor: '#505A65',
  color: 'white',
  marginBottom: '2%',
  fontWeight: '600',
  padding: '0.5% 1%',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
});
