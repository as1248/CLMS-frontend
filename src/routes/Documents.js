import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Documents = () => {
  return (
    <>
      <Header/>
      <Content>
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