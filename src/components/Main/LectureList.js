import styled from "styled-components";

const LectureList = () => {
    return(
        <List>
          <Lecture>
            <div>Web Programming</div>
            <div></div>
            <div></div>
          </Lecture>
          <Lecture>Comprehensive Design PBL</Lecture>
          <Lecture>Software Programing</Lecture>
          <CreateLectureBtn>강의 생성하기 +</CreateLectureBtn>
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
  cursor: pointer;
  width: 100%;
  margin: 1%;
  padding: 2%;
  border: 1px solid black;
  border-radius: 20px;
`;

const CreateLectureBtn = styled(Lecture)`
  width: 20%;
  border-radius: 40px;
  text-align: center;
`;