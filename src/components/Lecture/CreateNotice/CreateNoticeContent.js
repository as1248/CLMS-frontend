import styled from "styled-components";
import CreateNoticeHeader from "./CreateNoticeHeader";
import CreateNoticeButtons from "./CreateNoticeButtons";
import CreateNoticeContainer from "./CreateNoticeContainer";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateNoticeContent = () => {
  const { lectureId } = useParams();
  const [data, setData] = useState({
    lectureId
  });
  return (
    <Content>
      <Box>
        <CreateNoticeHeader/>
        <CreateNoticeContainer data={data} setData={setData}/>
        <CreateNoticeButtons data={data} setData={setData}/>
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