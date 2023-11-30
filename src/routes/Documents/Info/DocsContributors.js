import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DocumentsNav from "../../../components/Documents/DocumentsNav";
import DocumentsContributors from "../../../components/Documents/Info/DocumentsContributors";

const DocsContributors = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsContributors/>
      </Content>
      <Footer/>
    </>
  );
}

export default DocsContributors;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;