import { List } from "@mui/material";
import AboutCLMS from "./DocumentsNav/AboutCLMS";
import RoleUser from "./DocumentsNav/RoleUser";
import RoleManager from "./DocumentsNav/RoleManager";

const DocumentsNav = () => {
  return (
    <List
      style={{
            minHeight: '80vh',
            height: 'auto',
            overflow: "auto",
            width: '20%',
            minWidth: '200px',
            padding: '1%',
            backgroundColor: 'white'
          }}
        >
      <AboutCLMS/>
      <RoleUser/>
      <RoleManager/>
    </List>
  );
}

export default DocumentsNav;