import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DocumentsNav from "../components/Documents/DocumentsNav";
import DocumentsHome from "../components/Documents/DocumentsHome";

const Documents = () => {
  return (
    <>
      <Header/>
      <Content>
        <DocumentsNav/>
        <DocumentsHome/>
      </Content>
      <Footer/>
    </>
  );
}

export default Documents;

const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
`;