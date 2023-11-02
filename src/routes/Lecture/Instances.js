import styled from "styled-components";
import Header from "../../components/Header";
import LectureNavBar from "../../components/Lecture/LectureNavBar";
import InstanceList from "../../components/Lecture/Instances/InstanceList";

const Instances = () => {
  localStorage.removeItem('instanceId');
  return (
    <>
      <Header />
      <Content>
        <LectureNavBar />
        <InstanceList />
      </Content>
    </>
  );
};

export default Instances;

const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
`;
