import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tab from './Tab';
import SelectedTab from './SelectedTab';

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
            <SelectedTab>CLMS란?</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/")}>CLMS란?</Tab>
          )}
          {pathname.split('/')[2] === 'versions' ? (
            <SelectedTab>버전관리</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/versions")}>버전관리</Tab>
          )}
          {pathname.split('/')[2] === 'contributors' ? (
            <SelectedTab>개발진, 도움을 준 사람들</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/contributors")}>개발진, 도움을 준 사람들</Tab>
          )}
          {pathname.split('/')[2] === 'github' ? (
            <SelectedTab>GitHub</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/github")}>GitHub</Tab>
          )}
        </AccordionDetails>
      </Accordion>
  );
}

export default AboutCLMS;