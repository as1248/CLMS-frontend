import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MyTextFieldNumber from './MyTextFieldNumber';

const User = {
  email: 'wkdroal11@gmail.com',
  pw: '12341234'
};

const EmailVerified = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [showEmailField, setShowEmailField] = useState(false);
  const [NumberValid, setNumberValid] = useState(false); 

  useEffect(() => {
    if (NumberValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [NumberValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const onClickConfirmButton = () => {
    navigate('/login/findpw/ChangePw');
  };

  const handleButtonClick = () => {
    if (email === User.email) {
      setShowEmailField(true);
    } else {
      alert('존재하지 않는 이메일입니다.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField 
            value={email} 
            onChange={handleEmail} 
            onKeyDown={handleKeyDown} 
            label="이메일" 
            placeholder="이메일을 입력해주세요." 
            margin="normal" 
            required 
            fullWidth
          />
        </Grid>
        <Grid item xs={9}>
          <Button
            onClick={handleButtonClick}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            전송
          </Button>
        </Grid>
      </Grid>
      {showEmailField && <MyTextFieldNumber onNumberValidChange={setNumberValid} />}
    </Box>
  );
};

export default EmailVerified;