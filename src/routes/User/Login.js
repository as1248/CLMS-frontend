import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRecoilState } from "recoil";
import { userState } from "../../Atoms"
import axios from 'axios';
import Header from'../../components/Header';
import { Cookies } from "react-cookie";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";

const Login = () => {
  const [, setUserState] = useRecoilState(userState);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false
  })

  const cookies = new Cookies();

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    if (e.target.value.length > 0) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }
  
  const onClickConfirmButton = () => {
    axios.post('/login', { username: email, password: pw }, {withCredentials: true})
      .then(response => {
        if (response.data.success) {
          const accessToken = response.headers.authorization;
          const userRole = response.data.role;
          const deptId = response.data.departmentId;
          const refreshToken = response.data.refreshToken;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('userRole', userRole);
          localStorage.setItem('departmentId', deptId);
          cookies.set('refreshToken', refreshToken);
          setUserState(userRole);
          navigate('/');
        } else {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
        }
      })
      .catch(error => {
        if(error.response.status === 400){
          alert('로그인 실패: 올바른 ID와 비밀번호를 입력해주세요.');
        }else{
          alert('로그인 실패: ' + error.message);
        }
      });
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  }

  const handlePasswordType = () => {
    setPasswordType(prevState => {
      return {
        type: prevState.visible ? "password" : "text",
        visible: !prevState.visible
      };
    });
  };

  const PasswordIcon = passwordType.visible ? VisibilityIcon : VisibilityOffIcon;

  // API 요청 시 Authorization 헤더에 토큰 추가
  axios.interceptors.request.use(
    config => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <Header/>
      <Container>
        <LoginHeader>
          <BiLogIn/> 로그인
        </LoginHeader>
        <Box>
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
          <TextField
            margin="normal"
            label="비밀번호"
            name="password"
            placeholder="특수문자 제외, 영문, 숫자 포함 8자 이상"
            required
            fullWidth
            autoComplete="current-password"
            type={passwordType.type}
            value={pw}
            onChange={handlePw}
            onKeyDown={handleKeyDown}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon onClick={handlePasswordType} />
                </InputAdornment>
              )
            }} 
          />
          <Button
            disabled={notAllow}
            onClick={onClickConfirmButton}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
              로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link sx={{ fontSize: '1rem' }} underline="hover" onClick={()=>navigate("/login/findPw")} style={{cursor:'pointer'}}>비밀번호 변경</Link>
            </Grid>
            <Grid item xs>
              <Link sx={{ fontSize: '1rem' }} underline="hover" onClick={()=>navigate("/login/signUp")} style={{cursor:'pointer'}}>회원가입(학습자)</Link>
            </Grid>
            <Grid item>
              <Link sx={{ fontSize: '1rem' }} underline="hover" onClick={()=>navigate("/login/signUpAd")} style={{cursor:'pointer'}}>회원가입(교수자)</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer/>
    </>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 8%;
`;

const LoginHeader = styled.div`
  font-size: 48px;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 500px;
`;