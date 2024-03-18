import React, { useEffect, useState } from "react";
import Header from'../../components/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SelectUniv from '../../components/User/SignUp, SignUpAd/SelectUniv';
import SelectDept from '../../components/User/SignUp, SignUpAd/SelectDept';
import Footer from "../../components/Footer";
import NameInput from "../../components/User/SignUp, SignUpAd/NameInput";
import SubmitBtn from "../../components/User/SubmitBtn";
import PhoneNumberInput from "../../components/User/SignUp, SignUpAd/PhoneNumberInput";
import EmailField from "../../components/User/EmailField";
import PasswordField from "../../components/User/PasswordField";
import PasswordConfirmField from "../../components/User/PasswordConfirmField";

const SignUpAd = () => {
    const [authentication, setAuthentication] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
    const [phoneNumberValid, setPhoneNumberValid] = useState(false);
    const [notAllow,setNotAllow] = useState(true);
    const [UnivStu, setUnivStu] = useState('');
    const [DeptStu, setDeptStu] = useState('');

    //회원가입 요청
    const onClickConfirmButton =() =>{
      if(password!==passwordConfirm){
        alert('비밀번호를 다시 확인해주세요.');
      }
      else {
        axios.post('/register/manager', { username: email, password: password, name, universityId: UnivStu , departmentId: DeptStu, phone: phoneNumber})
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

    //학과 전화번호
    const handlePhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
      const regex = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
      if (regex.test(e.target.value)) {
        setPhoneNumberValid(true);
      } else {
        setPhoneNumberValid(false);
      }
    };

    //모든 입력에 대한 유효성 검사가 되면 회원가입 버튼 활성화
    useEffect(() =>{
      if(authentication && passwordValid && passwordConfirmValid && name && UnivStu && DeptStu && phoneNumberValid ){
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    },[authentication,passwordValid,passwordConfirmValid,name,UnivStu,DeptStu,phoneNumberValid]);
      
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
        <Title>교수자 회원가입</Title>
        <EmailField email={email} setEmail={setEmail} emailValid={emailValid} setEmailValid={setEmailValid} handleKeyDown={handleKeyDown} authentication={authentication} setAuthentication={setAuthentication} />
        <PasswordField password={password} setPassword={setPassword} passwordValid={passwordValid} setPasswordValid={setPasswordValid} handleKeyDown={handleKeyDown}/>
        <PasswordConfirmField password={password} passwordConfirm={passwordConfirm} setPasswordConfirm={setPasswordConfirm} passwordConfirmValid={passwordConfirmValid} setPasswordConfirmValid={setPasswordConfirmValid} handleKeyDown={handleKeyDown}/>
        <NameInput name={name} setName={setName} handleKeyDown={handleKeyDown} />
        <SelectUniv setUnivStu={setUnivStu} />
        <SelectDept universityId={UnivStu} setDeptStu={setDeptStu} />
        <PhoneNumberInput phoneNumber={phoneNumber} handlePhoneNumber={handlePhoneNumber} phoneNumberValid={phoneNumberValid} handleKeyDown={handleKeyDown} />
        <SubmitBtn notAllow={notAllow} onClickConfirmButton={onClickConfirmButton}>가입하기</SubmitBtn>
        </Box>
      </Container>
      <Footer/>
      </>
    );
}

export default SignUpAd;

const Title = styled.div`
  font-size: 32px;
`;