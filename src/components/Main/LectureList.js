import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LectureList = () => {
  const navigate = useNavigate();
  return (
    <List>
      <Lecture>
        <Title>Web Programming</Title>
        <Detail></Detail>
        <LectureBtn onClick={()=>navigate('/123')}>
          과목 홈 바로가기 <BsArrowRight size={24} />
        </LectureBtn>
      </Lecture>
      <Lecture>
        <Title>Comprehensive Design PBL</Title>
        <Detail></Detail>
        <LectureBtn onClick={()=>navigate('/123')}>
          과목 홈 바로가기 <BsArrowRight size={24} />
        </LectureBtn>
      </Lecture>
      <Lecture>
        <Title>Software Programing</Title>
        <Detail></Detail>
        <LectureBtn onClick={()=>navigate('/123')}>
          과목 홈 바로가기 <BsArrowRight size={24} />
        </LectureBtn>
      </Lecture>
      <CreateLectureBtn onClick={()=>navigate('/createLecture')}>강의 생성하기 +</CreateLectureBtn>
    </List>
  );
};

export default LectureList;

const List = styled.div`
  margin: 2%;
  margin-left: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`;

const Lecture = styled.div`
  display: flex;
  width: 100%;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding-left: 20px;
  font-size: 24px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
`;

const LectureBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 45px;
  border-radius: 25px;
  color: white;
  background-color: #6967c7;
  font-size: 16px;
`;

const CreateLectureBtn = styled(Lecture)`
  cursor: pointer;
  width: 20%;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
