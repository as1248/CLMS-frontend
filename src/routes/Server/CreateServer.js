import { redirect, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import Header from "../../components/Header";
import axios from "axios";
import { useState } from "react";
import Footer from "../../components/Footer";
import ServerIP from "../../components/Server/CreateServer/ServerIP";
import ServerName from "../../components/Server/CreateServer/ServerName";
import UserName from "../../components/Server/CreateServer/UserName";

//post 요청 구현하고 페이지 전환 기능 추가하기
const CreateServer = () => {
  const navigate = useNavigate();
  const departmentId = localStorage.getItem("departmentId");
  const [serverData, setServerData] = useState({ departmentId });

  const [IPValidate, setIPValidate] = useState(false);
  const [serverNameValidate, setServerNameValidate] = useState(false);
  const [serverUserNamevalidate, setServerUserNameValidate] = useState(false);
  
  //서버 생성
  const registerServer = () => {
    if (IPValidate && serverNameValidate && serverUserNamevalidate) {
      try {
        axios.post("/servers/register/new", serverData).then(
          setTimeout(() => {
            redirect("/lecturesHome");
            navigate("/lecturesHome");
          },2000)
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("입력이 올바르지 않습니다.");
    }
  };
  return (
    <>
      <Header />
      <Content>
        <ContentBody>
          <Title>서버 등록</Title>
          <Input>
            <ServerIP serverData={serverData} setServerData={setServerData} IPValidate={IPValidate} setIPValidate={setIPValidate}/>
          </Input>
          <Input>
            <ServerName serverData={serverData} setServerData={setServerData} serverNameValidate={serverNameValidate} setServerNameValidate={setServerNameValidate}/>
          </Input>
          <Input>
            <UserName serverData={serverData} setServerData={setServerData} serverUserNamevalidate={serverUserNamevalidate} setServerUserNameValidate={setServerUserNameValidate}/>
          </Input>
          <Button variant="contained" onClick={() => registerServer()}>
            서버 등록
          </Button>
        </ContentBody>
      </Content>
      <Footer/>
    </>
  );
};

export default CreateServer;

const Content = styled.div`
  padding: 0 5%;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 120px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 3%;
  background-color: white;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.div`
  width: 400px;
  font-size: 28px;
  margin: 30px;
`;
