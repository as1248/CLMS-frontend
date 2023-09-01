import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const LectureIntroduction = () => {
  const [validate, setValidate] = useState(true);
  //유효성 검사
  const validation = (str) => {
    const reg = /[a-zA-Zㄱ-ㅎ가-힣0-9\s]+/gim;
    return reg.test(str);
  };
  const nameHandler = (event) => {
    const value = event.target.value;
    if (value.length >= 2 && value.length <= 50) {
      for (let i = 0; i < value.length; i++) {
        if (validation(value[i])) {
          setValidate(true);
        } else {
          setValidate(false);
          break;
        }
      }
    } else {
      setValidate(false);
    }
  };
  return (
    <Content>
      <Title>강의 소개</Title>
      <TextField
        label="강의 소개"
        onChange={(e) => nameHandler(e)}
        helperText="강의 소개를 입력해주세요"
        error={!validate}
        size="small"
      />
    </Content>
  );
};

export default LectureIntroduction;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-width: 400px;
  padding: 2%;
  margin-bottom: 5%;
  box-shadow: 2px 2px #dbdfe0;
  background-color: #ffffff;
  border: 3px solid #f2f3f3;
  border-radius: 20px;
`;

const Title = styled.div`
  margin-bottom: 5%;
  font-weight: 600;
`;
