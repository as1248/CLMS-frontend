import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import InstanceName from "../../components/Instance/CreateInstance/InstanceName";
import SetKeyPair from "../../components/Instance/CreateInstance/SetKeyPair";
import MachineImage from "../../components/Instance/CreateInstance/MachineImage";
import Storage from "../../components/Instance/CreateInstance/Storage";
import CreateInstanceButtons from "../../components/Instance/CreateInstance/CreateInstanceButtons";
import { useParams } from "react-router-dom";

const CreateInstance = () => {
  //서버ID 없앨지 값 받아서 전달할지
  const { lectureId } = useParams();
  const [data,setData] = useState({
    name: '',
    storage: '1G',
    os: '',
    keyName: '',
    lectureId,
  });
  const [nameValidate,setNameValidate] = useState(false);
  const [keyPairValidate,setKeyPairValidate] = useState(false);
    return (
      <>
        <Header/>
        <Content>
          <Box>
            <InstanceName setData={setData} data={data} validate={nameValidate} setValidate={setNameValidate}/>
            <Storage setData={setData} data={data}/>
            <MachineImage setData={setData} data={data}/>
            <SetKeyPair setData={setData} data={data} validate={keyPairValidate} setValidate={setKeyPairValidate}/>
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
