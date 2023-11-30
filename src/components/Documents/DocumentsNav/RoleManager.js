import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RoleManager = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>교수자</div>
        </AccordionSummary>
        <AccordionDetails>
        {pathname.split('/')[2] === 'createServer' ? (
            <SelectedItem>서버 등록</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/createServer")}>서버 등록</Item>
          )}
          {pathname.split('/')[2] === 'createLecture' ? (
            <SelectedItem>강의 등록</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/createLecture")}>강의 등록</Item>
          )}
        </AccordionDetails>
      </Accordion>
  );
}

export default RoleManager;

const Item = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
  &:hover{
    background-color: #f2f4f7;
  }
`;

const SelectedItem = styled(Item)`
  background-color: #f2f4f7;
  border-radius: 5px;
`;