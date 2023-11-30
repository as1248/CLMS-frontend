import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsConnectInstance from "../../../components/Documents/Role_User/DocumentsConnectInstance";

const DocsConnectInstance = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsConnectInstance/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsConnectInstance;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;