import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from'../../components/Header';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SelectUniv from '../../components/User/SignUp, SignUpAd/SelectUniv';
import SelectDept from '../../components/User/SignUp, SignUpAd/SelectDept';
import axios from 'axios';
import Footer from "../../components/Footer";
import NameInput from "../../components/User/SignUp, SignUpAd/NameInput";
import StudentNumberInput from "../../components/User/SignUp, SignUpAd/StudentNumberInput";
import SubmitBtn from "../../components/User/SubmitBtn";
import EmailField from "../../components/User/EmailField";
import PasswordField from "../../components/User/PasswordField";
import PasswordConfirmField from "../../components/User/PasswordConfirmField";

const SignUp = () => {
  const [authentication, setAuthentication] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
  const [notAllow,setNotAllow] = useState(true);
  const [UnivStu, setUnivStu] = useState('');
  const [DeptStu, setDeptStu] = useState('');

  //학번
  const handleStudentNumber = (e) => {
    setStudentNumber(e.target.value);
  }

  //회원가입 요청
  const onClickConfirmButton = () => {
    if(password !== passwordConfirm){
      alert('비밀번호를 다시 확인해주세요.');
    } else {
      axios.post('/register/student', { username: email, password: password, name, studentNumber, universityId: UnivStu , departmentId: DeptStu })
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

  //모든 입력에 대한 유효성 검사가 되면 회원가입 버튼 활성화
  useEffect(() => {
    if(authentication && passwordValid && passwordConfirmValid && name && studentNumber && UnivStu && DeptStu ){
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [authentication, passwordValid, passwordConfirmValid, name, studentNumber, UnivStu , DeptStu]);

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
          <EmailField email={email} setEmail={setEmail} emailValid={emailValid} setEmailValid={setEmailValid} handleKeyDown={handleKeyDown} authentication={authentication} setAuthentication={setAuthentication} />
          <PasswordField password={password} setPassword={setPassword} passwordValid={passwordValid} setPasswordValid={setPasswordValid} handleKeyDown={handleKeyDown}/>
          <PasswordConfirmField password={password} passwordConfirm={passwordConfirm} setPasswordConfirm={setPasswordConfirm} passwordConfirmValid={passwordConfirmValid} setPasswordConfirmValid={setPasswordConfirmValid} handleKeyDown={handleKeyDown}/>
          <NameInput name={name} setName={setName} handleKeyDown={handleKeyDown} />
          <StudentNumberInput studentNumber={studentNumber} handleStudentNumber={handleStudentNumber} handleKeyDown={handleKeyDown} />
          <SelectUniv setUnivStu={setUnivStu} />
          <SelectDept universityId={UnivStu} setDeptStu={setDeptStu} />
          <SubmitBtn notAllow={notAllow} onClickConfirmButton={onClickConfirmButton}>가입하기</SubmitBtn>
        </Box>
      </Container>
      <Footer/>
    </>
  );
};

export default SignUp;

const Title = styled.div`
  font-size: 32px;
`;