import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RoleUser = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>학습자</div>
        </AccordionSummary>
        <AccordionDetails>
          {pathname.split('/')[2] === 'createInstance' ? (
            <SelectedItem>인스턴스 생성</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/createInstance")}>인스턴스 생성</Item>
          )}
          {pathname.split('/')[2] === 'connectInstance' ? (
            <SelectedItem>인스턴스 접속</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/connectInstance")}>인스턴스 접속</Item>
          )}
          {pathname.split('/')[2] === 'connectDomain' ? (
            <SelectedItem>도메인 연결</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/connectDomain")}>도메인 연결</Item>
          )}
          {pathname.split('/')[2] === 'enrolment' ? (
            <SelectedItem>수강 신청</SelectedItem>
          ) : (
            <Item onClick={()=>navigate("/documents/enrolment")}>수강 신청</Item>
          )}
        </AccordionDetails>
      </Accordion>
  );
}

export default RoleUser;

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