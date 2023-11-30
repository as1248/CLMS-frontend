import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsConnectDomain from "../../../components/Documents/Role_User/DocumentsConnectDomain";

const DocsConnectDomain = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsConnectDomain/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsConnectDomain;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;