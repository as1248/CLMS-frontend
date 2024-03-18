import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from'../../components/Header';
import Footer from "../../components/Footer";
import styled from "styled-components";
import EmailField from "../../components/User/EmailField";
import SubmitBtn from "../../components/User/SubmitBtn";

const FindPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [authentication, setAuthentication] = useState(false); 

  useEffect(() => {
    if (authentication) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [authentication]);

  // 이메일 인증이 완료되면 다음 비밀번호 변경 페이지로 이동(이메일 인증 로직 구현해야함)
  const onClickConfirmButton = () => {
    navigate('/login/findPassword/changePassword');
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
          <EmailField email={email} setEmail={setEmail} emailValid={emailValid} setEmailValid={setEmailValid} handleKeyDown={handleKeyDown} authentication={authentication} setAuthentication={setAuthentication} />
          <SubmitBtn notAllow={notAllow} onClickConfirmButton={onClickConfirmButton}>비밀번호 변경</SubmitBtn>
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