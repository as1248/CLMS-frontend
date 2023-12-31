import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import Header from'../../components/Header';
import Footer from "../../components/Footer";

const ChangePw = () => {
    const navigate = useNavigate(); 
    const [pw, setPw] = useState(''); 
    const [pw2, setPw2] = useState('');
    const [pwValid, setPwValid] = useState(false);
    const [pw2Valid, setPw2Valid] = useState(false);
    const [notAllow,setNotAllow] = useState(true);


    // 비밀번호가 비밀번호 양식에 맞는지 확인
    const handlePw = (e)=> {
      setPw(e.target.value);
      const regex =
        /^[a-zA-z0-9]{8,20}$/;
      if(regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    }

    // 비밀번호 확인이 비밀번호 양식에 맞는지 확인
    const handlePw2 = (e)=> {
      setPw2(e.target.value);
      const regex =pw;
      if(regex===e.target.value) {
        setPw2Valid(true);
      } else {
        setPw2Valid(false);
      }
    }
    
    // 비밀번호 변경 버튼 눌렀을 때
    const onClickConfirmButton =() =>{
      if(pw!==pw2){ // 비밀번호와 비밀번호가 일치하지 않을 때
        alert('비밀번호를 다시 확인해주세요.');
      }
      else {
        alert('비밀번호 변경완료!'); // 비밀번호와 비밀번호가 일치할 때
        navigate('/login');// login 페이지로 이동
      }
    }

    //Enter가 버튼 클릭 기능으로 구현되도록 설정
    const handleKeyDown = (e) => {
      if(e.code === 'Enter' && notAllow===false ) {
        onClickConfirmButton()
      }
    }

    //버튼 활성화 실시간으로
    useEffect(() =>{
      if(pwValid && pw2Valid){
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    },[pwValid,pw2Valid]);
    
    //페이지 UI 설정
    return (
      <>
        <Header/>
        <Container>
        <Box>
          <Title>비밀번호 변경</Title>
          <TextField
            value={pw}
            onChange={handlePw}
            onKeyDown={handleKeyDown}
            margin="normal"
            label="비밀번호"
            type="password"
            name="password"
            placeholder="특수문자 제외, 영문, 숫자 포함 8자 이상"
            required
            fullWidth
            autoComplete="current-password"
          />
          {
            !pwValid && pw.length > 0 && (
              <StyledText>특문자 제외 영문자 숫자로 8자 이상 20자 미만으로 입력해주세요</StyledText>
            )
          }
          <TextField
            value={pw2}
            onChange={handlePw2}
            onKeyDown={handleKeyDown}
            margin="normal"
            label="비밀번호 확인"
            type="password"
            name="passwordConfirm"
            required
            fullWidth
            autoComplete="current-password"
          />
          {
            !pw2Valid && pw2.length > 0 && (
              <StyledText>비밀번호가 일치하지 않습니다</StyledText>
            )
          }
          <Button
            disabled={notAllow}
            onClick={onClickConfirmButton}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            비밀번호 변경
          </Button>
        </Box>
      </Container>
      <Footer/>
    </>
  ); 
};

export default ChangePw;

const StyledText = styled.div`
color:red;
font-size:0.8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  padding-top: 8%;
`;

const Box = styled.div`
  width: 400px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
`;