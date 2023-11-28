import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsVersions from "../../../components/Documents/Info/DocumentsVersions";

const DocsVersions = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsVersions/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsVersions;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;