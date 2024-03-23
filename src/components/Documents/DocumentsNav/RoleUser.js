import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tab from './Tab';
import SelectedTab from './SelectedTab';

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
            <SelectedTab>인스턴스 생성</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/createInstance")}>인스턴스 생성</Tab>
          )}
          {pathname.split('/')[2] === 'connectInstance' ? (
            <SelectedTab>인스턴스 접속</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/connectInstance")}>인스턴스 접속</Tab>
          )}
          {pathname.split('/')[2] === 'connectDomain' ? (
            <SelectedTab>도메인 연결</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/connectDomain")}>도메인 연결</Tab>
          )}
          {pathname.split('/')[2] === 'enrolment' ? (
            <SelectedTab>수강 신청</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/enrolment")}>수강 신청</Tab>
          )}
        </AccordionDetails>
      </Accordion>
  );
}

export default RoleUser;