import styled from "styled-components";
import CreateNoticeHeader from "./CreateNoticeHeader";
import CreateNoticeButtons from "./CreateNoticeButtons";
import CreateNoticeContainer from "./CreateNoticeContainer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LectureNav from "../LectureNav";

const CreateNoticeContent = () => {
  const { lectureId } = useParams();
  const time = new Date();
  const createAt = `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  const [data, setData] = useState({
    lectureId,
    createAt
  });

  return (
    <Content>
      <LectureNav/>
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
  height: 96.5vh;
  padding: 2% 0;
`;

const Box = styled.div`
  background-color: white;
  padding: 2%;
  height: 100%;
`;