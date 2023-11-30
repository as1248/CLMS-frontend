import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutCLMS = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>About CLMS</div>
        </AccordionSummary>
        <AccordionDetails>
          {pathname.split('/')[2] === '' ? (
            <SelectedItem>CLMS란?</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/")}>CLMS란?</Item>
          )}
          {pathname.split('/')[2] === 'versions' ? (
            <SelectedItem>버전관리</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/versions")}>버전관리</Item>
          )}
          {pathname.split('/')[2] === 'contributors' ? (
            <SelectedItem>개발진, 도움을 준 사람들</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/contributors")}>개발진, 도움을 준 사람들</Item>
          )}
          {pathname.split('/')[2] === 'github' ? (
            <SelectedItem>GitHub</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/github")}>GitHub</Item>
          )}
        </AccordionDetails>
      </Accordion>
  );
}

export default AboutCLMS;

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