import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List } from "@mui/material";

const DocumentsNav = () => {
  return (
    <List
      style={{
            maxHeight: '80vh',
            overflow: "auto",
            width: '20%',
            minWidth: '200px',
            padding: '1%',
            backgroundColor: 'white'
          }}
        >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>About CLMS</div>
        </AccordionSummary>
        <AccordionDetails>
          <Item>CLMS란?</Item>
          <Item>버전관리</Item>
          <Item>활동</Item>
          <Item>개발진, 도움을 준 사람들</Item>
          <Item>GitHub</Item>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>학습자</div>
        </AccordionSummary>
        <AccordionDetails>
          <Item>인스턴스 생성</Item>
          <Item>인스턴스 접속</Item>
          <Item>도메인 연결</Item>
          <Item>수강 신청</Item>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>교수자</div>
        </AccordionSummary>
        <AccordionDetails>
          <Item>서버 등록</Item>
          <Item>강의 등록</Item>
        </AccordionDetails>
      </Accordion>
    </List>
  );
}

export default DocumentsNav;

const Item = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
  &:hover{
    background-color: #f2f4f7;
  }
`;