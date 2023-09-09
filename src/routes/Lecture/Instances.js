import styled from "styled-components";
import Header from "../../components/Header";
import LectureNav from "../../components/Lecture/LectureNav";
import InstanceList from "../../components/Lecture/Instances/InstanceList";

const Instances = () => {
  return (
    <>
      <Header />
      <Content>
        <LectureNav />
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
