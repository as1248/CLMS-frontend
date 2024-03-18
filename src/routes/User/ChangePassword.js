import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Header from'../../components/Header';
import Footer from "../../components/Footer";
import SubmitBtn from "../../components/User/SubmitBtn";
import PasswordField from "../../components/User/PasswordField";
import PasswordConfirmField from "../../components/User/PasswordConfirmField";

const ChangePassword = () => {
    const navigate = useNavigate(); 
    const [password, setPassword] = useState(''); 
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
    const [notAllow,setNotAllow] = useState(true);

    // 비밀번호 변경 버튼 눌렀을 때
    const onClickConfirmButton =() =>{
      if(password!==passwordConfirm){
        alert('비밀번호를 다시 확인해주세요.');
      }
      else {
        alert('비밀번호 변경완료!');
        navigate('/login');
      }
    }

    //Enter가 버튼 클릭 기능으로 구현되도록 설정
    const handleKeyDown = (e) => {
      if(e.code === 'Enter' && notAllow===false ) {
        onClickConfirmButton()
      }
    }

    useEffect(() =>{
      if(passwordValid && passwordConfirmValid){
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    },[passwordValid,passwordConfirmValid]);
    
    return (
      <>
        <Header/>
        <Container>
        <Box>
          <Title>비밀번호 변경</Title>
          <PasswordField password={password} setPassword={setPassword} passwordValid={passwordValid} setPasswordValid={setPasswordValid} handleKeyDown={handleKeyDown}/>
          <PasswordConfirmField password={password} passwordConfirm={passwordConfirm} setPasswordConfirm={setPasswordConfirm} passwordConfirmValid={passwordConfirmValid} setPasswordConfirmValid={setPasswordConfirmValid} handleKeyDown={handleKeyDown}/>
          <SubmitBtn notAllow={notAllow} onClickConfirmButton={onClickConfirmButton}>비밀번호 변경</SubmitBtn>
        </Box>
      </Container>
      <Footer/>
    </>
  ); 
};

export default ChangePassword;

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
  margin-bottom: 20px;
`;