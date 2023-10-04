import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import InstanceName from "../../components/Instance/CreateInstance/InstanceName";
import SetKeyPair from "../../components/Instance/CreateInstance/SetKeyPair";
import MachineImage from "../../components/Instance/CreateInstance/MachineImage";
import Storage from "../../components/Instance/CreateInstance/Storage";
import CreateInstanceButtons from "../../components/Instance/CreateInstance/CreateInstanceButtons";
import { useLocation } from "react-router-dom";

const CreateInstance = () => {
  const {state} = useLocation();
  //서버ID 없앨지 값 받아서 전달할지
  const [data,setData] = useState({
    name: '',
    storage: '1G',
    os: '',
    keyName: '',
    serverId: '',
    userId: state.userId,
    address: state.address,
  });
  const [nameValidate,setNameValidate] = useState(false);
  const [keyPairValidate,setKeyPairValidate] = useState(false);
  const [hostname,setHostname] = useState('');
    return (
      <>
        <Header/>
        <Content>
          <Box>
            <InstanceName setData={setData} data={data} validate={nameValidate} setValidate={setNameValidate}/>
            <Storage setData={setData} data={data}/>
            <MachineImage setData={setData} data={data}/>
            <SetKeyPair setData={setData} data={data} validate={keyPairValidate} setValidate={setKeyPairValidate} hostname={hostname}/>
            <CreateInstanceButtons data={data} validate={nameValidate&&keyPairValidate}/>
          </Box>
        </Content>  
      </>
    );
};
export default CreateInstance;

const Content = styled.div`
  padding: 0 5%;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 120px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5% 0 ;
`;
