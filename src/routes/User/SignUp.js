import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from'../../components/Header';
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import VerifyEmail from '../../components/User/VerifyEmail';
import SelectUniv from '../../components/User/SelectUniv';
import SelectDept from '../../components/User/SelectDept';
import axios from 'axios';
import Footer from "../../components/Footer";



//더미데이터
const User = {
  email: 'wkdroal11@gmail.com',
  pw: 'hyuk0229'
}

const SignUp = () => {
  const [NumberValid, setNumberValid] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [name, setName] = useState('');
  const [no, setNo] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pw2Valid, setPw2Valid] = useState(false);
  const [notAllow,setNotAllow] = useState(true);
  const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
  const [showEmailField, setShowEmailField] = useState(false);
  const [UnivStu, setUnivStu] = useState('');
  const [DeptStu, setDeptStu] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^[a-zA-z0-9]{8,20}$/;
    if(regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }

  const handlePw2 = (e) => {
    setPw2(e.target.value);
    const regex = pw;
    if(regex === e.target.value) {
      setPw2Valid(true);
    } else {
      setPw2Valid(false);
    }
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleNo = (e) => {
    setNo(e.target.value);
  }


  const onClickConfirmButton = () => {
    if(pw !== pw2){
      alert('비밀번호를 다시 확인해주세요.');
    } else {
      axios.post('/register/student', { username: email, password: pw, name, no, universityId: UnivStu , departmentId: DeptStu })
        .then(response => {
          navigate('/login');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  const handleKeyDown = (e) => {
    if(e.code === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  }

  useEffect(() => {
    if(NumberValid && pwValid && pw2Valid && name && no && UnivStu && DeptStu ){
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [NumberValid, pwValid, pw2Valid, name, no, UnivStu , DeptStu]);

    const handleButtonClick = () => {
      if (email === User.email) {
        alert('존재하는 메일입니다.');
      } else {
        setShowEmailField(true);
        setSendButtonDisabled(true);
        axios.get('/register/verification',
                    { params: { email: email } },
                    { withCredentials: true })
          .then(response => {
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
  
  return (
    <>
      <Header/>
      <Container component="main" maxWidth="xs" style={{marginBottom:'40px'}}>
        <Box 
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
        >
          <Title>학습자 회원가입</Title>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                value={email}
                onChange={handleEmail}
                onKeyDown={handleKeyDown}
                disabled={showEmailField}
                label="이메일"
                placeholder="이메일을 입력해주세요."
                margin="normal"
                required
                fullWidth
              />
              {
                !emailValid && email.length > 0 && (
                  <StyledText>올바른 이메일 형식을 입력해주세요</StyledText>
                )
              }
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
          {showEmailField && <VerifyEmail email={email} onNumberValidChange={setNumberValid}/>}
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
          <TextField
            value={name}
            onChange={handleName}
            onKeyDown={handleKeyDown}
            margin="normal"
            label="이름"
            name="name"
            required
            fullWidth
          />
          <TextField
            value={no}
            onChange={handleNo}
            onKeyDown={handleKeyDown}
            margin="normal"
            label="학번"
            name="no"
            required
            fullWidth
          />
          <SelectUniv setUnivStu={setUnivStu}/>
          <SelectDept universityId={UnivStu} setDeptStu={setDeptStu}/>
          <Button
            disabled={notAllow}
            onClick={onClickConfirmButton}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            가입하기
          </Button>
        </Box>
      </Container>
      <Footer/>
    </>
  );
};

export default SignUp;

const StyledText = styled.div`
  color:red;
  font-size:0.8rem;
`;

const Title = styled.div`
  font-size: 32px;
`;