import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import VerifyEmail from '../../components/User/VerifyEmail';
import Header from'../../components/Header';
import Footer from "../../components/Footer";
import styled from "styled-components";
import EmailInput from "../../components/User/EmailInput";
import axios from "axios";
import SendEmailBtn from "../../components/User/SignUp, SignUpAd/SendEmailBtn";

const FindPassword = () => {
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

  // 이메일 인증이 완료되면 다음 비밀번호 변경 페이지로 이동
  const onClickConfirmButton = () => {
    navigate('/login/findPassword/changePassword');
  };

  // 전송 버튼을 클릭했을 때 
  const handleButtonClick = () => {
    setShowEmailField(true);
    setSendButtonDisabled(true);
    axios.get('/register/verification',
      { params: { email: email } },
      { withCredentials: true }
    ).then(response => {

    }
    ).catch(error => {
      console.error(error);
    });
  };

  //Enter가 버튼 클릭 기능으로 구현되도록 설정
  const handleKeyDown = (e) => {
    if (e.code === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  };

  return (
    <>
      <Header/>
      <Container>
        <Box>
          <Title>비밀번호 찾기</Title>
          <SubTitle>비밀번호를 찾고자하는 아이디를 입력해주세요.</SubTitle>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <EmailInput email={email} setEmail={setEmail} emailValid={emailValid} setEmailValid={setEmailValid} handleKeyDown={handleKeyDown} showEmailField={showEmailField}/>
            </Grid>
            <Grid item xs={3}>
              <SendEmailBtn emailValid={emailValid} sendButtonDisabled={sendButtonDisabled} handleButtonClick={handleButtonClick} />
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

export default FindPassword;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  padding-top: 8%;
`;

const Box = styled.div`
  width: 450px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  margin-bottom: 60px;
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`;