import { useLocation, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tab from './Tab';
import SelectedTab from './SelectedTab';

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
            <SelectedTab>서버 등록</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/createServer")}>서버 등록</Tab>
          )}
          {pathname.split('/')[2] === 'createLecture' ? (
            <SelectedTab>강의 등록</SelectedTab>
          ) : (
            <Tab onClick={()=>navigate("/documents/createLecture")}>강의 등록</Tab>
          )}
        </AccordionDetails>
      </Accordion>
  );
}

export default RoleManager;