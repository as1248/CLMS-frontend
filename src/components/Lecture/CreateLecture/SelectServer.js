import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

//서버리스트 API 추가해야함
const SelectServer = ({data, setData}) => {
  const departmentId = localStorage.getItem('departmentId');
  const [serverList, setServerList] = useState([]);

  const handleServer = (e) => {
    setData({...data,serverId: e.target.value});
  }

  useEffect(()=>{
    try{
      axios.get(`/servers/management/list?departmentId=${departmentId}`).then((response)=>setServerList(response.data.servers));
    } catch (error) {
      console.error(error);
    };
  },[]);

  return (
    <Content>
      <Title>서버 선택</Title>
      <Select labelId="server" defaultValue='1' size="small" onChange={handleServer}>
        {serverList.map((i) => (
          <MenuItem value={i?.serverId} key={i?.serverId}>
            {i?.name}
          </MenuItem>
        ))}
      </Select>
    </Content>
  );
};

export default SelectServer;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-width: 400px;
  padding: 2%;
  margin-bottom: 5%;
  box-shadow: 2px 2px #dbdfe0;
  background-color: #ffffff;
  border: 3px solid #f2f3f3;
  border-radius: 20px;
`;

const Title = styled.div`
  margin-bottom: 5%;
  font-weight: 600;
`;
