import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import VerifyEmail from '../../components/User/VerifyEmail';
import Header from'../../components/Header';
import Footer from "../../components/Footer";
import styled from "styled-components";

// 더미데이터
const User = {
  email: 'a@a.com',
  pw: '12341234'
};

const FindPw = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [showEmailField, setShowEmailField] = useState(false);
  const [NumberValid, setNumberValid] = useState(false); 
  const [sendButtonDisabled, setSendButtonDisabled] = useState(false);

  // 이메일 인증 번호 실시간 조회
  useEffect(() => {
    if (NumberValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [NumberValid]);


  // 이메일 입력 상태 확인
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) { // 이메일에 한글자로 입력을 했을 시
      setEmailValid(true);
    } else { // 이메일에 아무것도 입력 안 했을 시
      setEmailValid(false);
    }
  };

  // 이메일 인증이 완료되면 다음 비밀번호 변경 페이지로 이동
  const onClickConfirmButton = () => {
    navigate('/login/findPw/changePw');
  };

  // 전송 버튼을 클릭했을 때 
  const handleButtonClick = () => {
    if (email === User.email) { // 이메일이 서버에 존재할 때
      setShowEmailField(true); 
      setSendButtonDisabled(true);
    } else { // 존재하지 않을 때
      alert('존재하지 않는 이메일입니다.');
    }
  };

  //Enter가 버튼 클릭 기능으로 구현되도록 설정
  const handleKeyDown = (e) => {
    if (e.code === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  };


  //페이지 UI 설정
  return (
    <>
      <Header/>
      <Container>
        <Box>
          <Title>비밀번호 변경</Title>
          <SubTitle>이메일 인증</SubTitle>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                value={email}
                onChange={handleEmail}
                onKeyDown={handleKeyDown}
                disabled={showEmailField}
                label="이메일"
                placeholder="example@company.com"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                disabled={!emailValid || sendButtonDisabled}
                onClick={handleButtonClick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                전송
              </Button>
            </Grid>
          </Grid>
          {showEmailField && <VerifyEmail onNumberValidChange={setNumberValid} />}
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

export default FindPw;

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
  margin-bottom: 60px;
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 24px;
`;