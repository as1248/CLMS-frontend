import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsEnrolment from "../../../components/Documents/Role_User/DocumentsEnrolment";

const DocsEnrolment = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsEnrolment/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsEnrolment;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;