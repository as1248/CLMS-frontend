import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateLectureBtn = ({ data }) => {
  const navigate = useNavigate();
  const createLecture = () => {
    console.log(data);
    try {
      axios.post("/lecture", data).then(response=>console.log(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Content>
      <CancelBtn onClick={() => navigate("/lecturesHome")}>취소</CancelBtn>
      <CreateBtn onClick={() => createLecture()}>생성하기</CreateBtn>
    </Content>
  );
};

export default CreateLectureBtn;

const Content = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 40%;
  min-width: 400px;
  margin-bottom: 5%;
`;

const CancelBtn = styled.div`
  margin-right: 40px;
  cursor: pointer;
  padding: 4px 15px;
  border-radius: 20px;
  font-weight: 600;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const CreateBtn = styled.div`
  cursor: pointer;
  width: 25%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3eb5c4;
  color: white;
  border-radius: 20px;
  font-weight: 600;
  &:hover {
    background-color: #2da4b3;
  }
`;
