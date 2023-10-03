import styled from "styled-components";
import CreateNoticeHeader from "./CreateNoticeHeader";
import CreateNoticeButtons from "./CreateNoticeButtons";
import CreateNoticeContainer from "./CreateNoticeContainer";

const CreateNoticeContent = () => {
  return (
    <Content>
      <Box>
        <CreateNoticeHeader/>
        <CreateNoticeContainer/>
        <CreateNoticeButtons/>
      </Box>
    </Content>
  );
};

export default CreateNoticeContent;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const Box = styled.div`
  background-color: white;
  padding: 3%;
`;