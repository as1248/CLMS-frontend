import styled from "styled-components";
import Header from "../../components/Header";
import SelectServer from "../../components/Lecture/CreateLecture/SelectServer";
import LectureName from "../../components/Lecture/CreateLecture/LectureName";
import { useNavigate } from "react-router-dom";

const CreateLecture = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header/>
      <Content>
        <Title>강좌 생성</Title>
        <Box>
          <SelectServer/>
          <LectureName/>
        </Box>
        <Bottom>
          <CreateBtn onClick={()=>navigate('/')}>생성하기 +</CreateBtn>
        </Bottom>
      </Content>
    </>
  );
}

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
  margin: 5% 0 ;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const CreateBtn = styled.div`
  cursor: pointer;
  width: 15%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 25px;
`;