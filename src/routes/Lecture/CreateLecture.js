import styled from "styled-components";
import Header from "../../components/Header";
import SelectServer from "../../components/Lecture/CreateLecture/SelectServer";
import LectureName from "../../components/Lecture/CreateLecture/LectureName";
import LectureIntroduction from "../../components/Lecture/CreateLecture/LectureIntroduction";
import CreateLectureBtn from "../../components/Lecture/CreateLecture/CreateLectureBtn";
import { useState } from "react";

const CreateLecture = () => {
  const [data, setData] = useState({
    serverId: 1,
  });
  return (
    <>
      <Header />
      <Content>
        <Title>강의 생성</Title>
        <Box>
          <SelectServer data={data} setData={setData}/>
          <LectureName data={data} setData={setData}/>
          <LectureIntroduction data={data} setData={setData}/>
          <CreateLectureBtn data={data}/>
        </Box>
      </Content>
    </>
  );
};

export default CreateLecture;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 85vh;
  padding: 2% 5%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5% 0;
`;