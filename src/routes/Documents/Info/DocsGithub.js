import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsGithub from "../../../components/Documents/Info/DocumentsGithub";

const DocsGithub = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsGithub/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsGithub;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;