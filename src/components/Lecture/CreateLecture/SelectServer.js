import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const SelectServer = () => {
  const [serverList, setServerList] = useState([]);

  return (
    <Content>
      <Title>서버 선택</Title>
      <Select labelId="server" value='1' size="small">
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
