import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsCreateLecture from "../../../components/Documents/Role_Manager/DocumentsCreateLecture";

const DocsCreateLecture = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsCreateLecture/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsCreateLecture;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;