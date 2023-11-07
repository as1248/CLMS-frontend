import { useState } from "react";
import styled from "styled-components";
import KeyPairModal from "./KeyPairModal";
import { TextField } from "@mui/material";


const SetKeyPair = ({setData, data, validate, setValidate}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [keyPairName, setKeyPairName] = useState('');

    return (
      <Content>
        <KeyPair>
            <Title>키 페어</Title>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <TextField disabled label='키 페어' value={keyPairName} error={!validate} helperText='키 페어 이름을 입력해주세요' style={{width:'60%'}} size="small"/>
              <CreateKeyPair onClick={()=>setModalOpen(true)}>새 키 페어 생성</CreateKeyPair>
            </div>
        </KeyPair>
        {modalOpen ? <KeyPairModal setModalOpen={setModalOpen} data={data} setData={setData} setKeyPairName={setKeyPairName} setKeyPairValidate={setValidate}/> : <></>}
      </Content> 
    );
};

export default SetKeyPair;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 50%;
  min-width: 400px;
  padding: 2%;
  margin-bottom: 5%;
  box-shadow: 2px 2px #dbdfe0;
  background-color: #ffffff;
  border: 3px solid #f2f3f3;
  border-radius: 20px;
`;

const KeyPair = styled.div`
`;

const Title = styled.div`
  margin-bottom: 5%;
  font-weight: 600;
`;

const CreateKeyPair = styled.div`
  cursor: pointer;
  height: 55px;
  &:hover{
    text-decoration: underline;
  }
`;
