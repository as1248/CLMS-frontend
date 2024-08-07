import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../Atoms"
import axios from 'axios';
import Header from'../../components/Header';
import { Cookies } from "react-cookie";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import EmailInput from "../../components/User/Login/EmailInput";
import PasswordInput from "../../components/User/Login/PasswordInput";
import LoginBtn from "../../components/User/Login/LoginBtn";
import LoginMore from "../../components/User/Login/LoginMore";

const Login = () => {
  const [, setUserState] = useRecoilState(userState);
  const navigate = useNavigate();
  const email = useRef('');
  const password = useRef('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const cookies = new Cookies();

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    email.current.value = e.target.value;
    if (e.target.value.length > 0) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    password.current.value = e.target.value;
    if (e.target.value.length > 0) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }
  
  const onClickConfirmButton = () => {
    axios.post('/login', { username: email, password: password.current.value }, {withCredentials: true})
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
          <EmailInput email={email} handleEmail={handleEmail} handleKeyDown={handleKeyDown}/>
          <PasswordInput password={password} handlePassword={handlePassword} handleKeyDown={handleKeyDown}/>
          <LoginBtn notAllow={notAllow} onClickConfirmButton={onClickConfirmButton}/>
          <LoginMore />
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
  min-height: 600px;
  padding-top: 8%;
`;

const LoginHeader = styled.div`
  font-size: 48px;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 500px;
`;