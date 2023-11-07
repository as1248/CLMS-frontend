import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import InstanceList from "../../components/Lecture/Instances/InstanceList";
import Footer from "../../components/Footer";

const Instances = () => {
  localStorage.removeItem('instanceId');
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <InstanceList />
      </Content>
      <Footer/>
    </>
  );
};

export default Instances;

const Content = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;
`;
