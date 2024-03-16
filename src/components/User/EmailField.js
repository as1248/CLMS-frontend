import Grid from '@mui/material/Grid';
import EmailInput from './EmailInput';
import SendEmailBtn from './SendEmailBtn';
import VerifyEmail from './VerifyEmail';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EmailField = ({email, setEmail, emailValid, setEmailValid, handleKeyDown, authentication, setAuthentication}) => {
  const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
  const [showEmailField, setShowEmailField] = useState(false);

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

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={9}>
        <EmailInput email={email} setEmail={setEmail} emailValid={emailValid} setEmailValid={setEmailValid} handleKeyDown={handleKeyDown} showEmailField={showEmailField} />
        {!emailValid && email.length > 0 && (
            <StyledText>올바른 이메일 형식을 입력해주세요</StyledText>
          )}
      </Grid>
      <Grid item xs={3}>
        <SendEmailBtn emailValid={emailValid} sendButtonDisabled={sendButtonDisabled} handleButtonClick={handleButtonClick} />
      </Grid>
    </Grid>
    {showEmailField && <VerifyEmail email={email} authentication={authentication} setAuthentication={setAuthentication}/>}
    </>
  );
}

export default EmailField;

const StyledText = styled.div`
  color:red;
  font-size:0.8rem;
`;