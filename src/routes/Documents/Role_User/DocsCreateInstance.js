import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsCreateInstance from "../../../components/Documents/Role_User/DocumentsCreateInstance";

const DocsCreateInstance = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsCreateInstance/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsCreateInstance;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;