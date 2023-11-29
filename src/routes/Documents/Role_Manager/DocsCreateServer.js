import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsCreateServer from "../../../components/Documents/Role_Manager/DocumentsCreateServer";

const DocsCreateServer = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsCreateServer/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsCreateServer;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;