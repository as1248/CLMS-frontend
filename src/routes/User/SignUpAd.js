import React, { useEffect, useState } from "react";
import Header from'../../components/Header';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import VerifyEmail from '../../components/User/VerifyEmail';
import SelectUniv from '../../components/User/SelectUniv';
import SelectDept from '../../components/User/SelectDept';

const User = {
    email: 'wkdroal11@gmail.com',
    pw: 'hyuk0229'
  }

const SignUpAd = () => {
    const [NumberValid, setNumberValid] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pw2Valid, setPw2Valid] = useState(false);
    const [TelValid, setTelValid] = useState(false);
    const [notAllow,setNotAllow] = useState(true);
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
    const [showEmailField, setShowEmailField] = useState(false);
    const [UnivStu, setUnivStu] = useState('');
    const [DeptStu, setDeptStu] = useState('');
    const [Tel, setTel] = useState('');

    //
    const handleEmail = (e)=> {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    }

    //비밀번호 오류메세지
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

    //비밀번호 확인 오류메세지
    const handlePw2 = (e)=> {
      setPw2(e.target.value);
      const regex =pw;
      if(regex===e.target.value) {
        setPw2Valid(true);
      } else {
        setPw2Valid(false);
      }
    }

    //회원가입 버튼 눌렀을 시 메세지
    const onClickConfirmButton =() =>{
      if(pw!==pw2){
        alert('비밀번호를 다시 확인해주세요.');
      }
      else {
      console.log("실행됨");
        axios.post('/register/manager', { username: email, password: pw, universityId: UnivStu , departmentId: DeptStu, phone: Tel})
        .then(response => {
          navigate('/login');
        })
        .catch(error => {
          console.error(error);
        });
      }
    }

    //Enter로 버튼 클릭 가능하게
    const handleKeyDown = (e) => {
      if(e.code === 'Enter' && notAllow===false ) {
        onClickConfirmButton()
      }
    }

    //버튼 활성화 실시간으로
    useEffect(() =>{
      if(NumberValid && pwValid && pw2Valid && UnivStu && DeptStu && TelValid ){
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    },[NumberValid,pwValid,pw2Valid,UnivStu,DeptStu,TelValid]);

    //
    const handleButtonClick = () => {
      if (email === User.email) {
        alert('존재하는 메일입니다.');
      } else {
        setShowEmailField(true);
        setSendButtonDisabled(true);
        axios.get('/register/verification', { params: { email: email } })
          .then(response => {
          })
          .catch(error => {
            console.error(error);
          });
      }
    };

    const handleTel = (e) => {
      setTel(e.target.value);
      if (e.target.value.length > 0) { // 전화번호 한글자로 입력을 했을 시
          setTelValid(true);
        } else { // 전화번호 아무것도 입력 안 했을 시
          setTelValid(false);
        }
      };

      
    return (
    <>
      <Header/>
      <Container component="main" maxWidth="xs">
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <div>관리자 회원가입</div>
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
              sx={{ mt: 3, mb: 2 }}
            >
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
            <StyledText >특문자 제외 영문자 숫자로 8자 이상 20자 미만으로 입력해주세요</StyledText>
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
          <SelectUniv setUnivStu={setUnivStu}/>
          <SelectDept universityId={UnivStu} setDeptStu={setDeptStu}/>
          <TextField
            value={Tel}  
            onChange={handleTel}
            label="학과 전화번호"
            margin="normal"
            required
            fullWidth
          />
          <Button
            disabled={notAllow}
            onClick={onClickConfirmButton}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            가입하기
          </Button>
        </Box>
      </Container></>
    );
}

export default SignUpAd;

const StyledText = styled.div`
color:red;
font-size:0.8rem;
`;