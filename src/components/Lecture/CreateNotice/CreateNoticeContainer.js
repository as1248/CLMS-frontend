import { TextField } from "@mui/material";
import styled from "styled-components";

const CreateNoticeContainer = ({data, setData}) => {
  const titleHandler = (e) => {
    const value = e.target.value;
    setData({...data, title: value});
  };

  const contentHandler = (e) => {
    const value = e.target.value;
    setData({...data, content: value});
  };


  return (
    <Container>
      <Title>
        <Name>제목</Name>
        <TextField onChange={titleHandler} style={{width:'90%'}}/>
      </Title>
      <Content>
        <Name>내용</Name>
        <TextField onChange={contentHandler} multiline rows={8} style={{width:'90%'}}/>
      </Content>
    </Container>
  );
};

export default CreateNoticeContainer;

const Container = styled.div`
  padding: 2% 1%;
  border-top: 2px solid #808080;;
  border-bottom: 1px solid #808080;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  width: 10%;
`;

const Input = styled.input`
  word-wrap: normal;
  width: 80%;
`;