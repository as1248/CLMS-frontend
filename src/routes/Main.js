import styled from "styled-components";
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import Slide from "../components/Main/Slide";

const Main = () => {
  return (
    <>
      <Header />
      <Content>
        <Slide />
      </Content>
      <Footer />
    </>
  );
};

export default Main;

const Content = styled.div`
  padding-top: 30px;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 120px;
`;
