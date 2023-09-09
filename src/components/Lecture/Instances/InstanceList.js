import styled from "styled-components";
import { useState } from "react";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InstanceList = () => {
  const navigate = useNavigate();
  const [instanceList, setInstanceList] = useState([
    {
      userName: "asd",
      instanceName: "123asdf",
    },
    {
      userName: "asdf",
      instanceName: "123asdfa",
    },
    {
      userName: "as",
      instanceName: "123ascdf",
    },
    {
      userName: "asd",
      instanceName: "123asdf",
    },
    {
      userName: "asdf",
      instanceName: "123asdfa",
    },
    {
      userName: "as",
      instanceName: "123ascdf",
    },
    {
      userName: "asd",
      instanceName: "123asdf",
    },
    {
      userName: "asdf",
      instanceName: "123asdfa",
    },
    {
      userName: "as",
      instanceName: "123ascdf",
    },
  ]);
  return (
    <Content>
      <IList>
        <Title>인스턴스 목록</Title>
        <InstanceHeader>
          <StudentName>이름</StudentName>
          <InstanceName>인스턴스 이름</InstanceName>
        </InstanceHeader>
        <List
          style={{
            maxHeight: 380,
            overflow: "auto",
            border: "1px solid #eaeded",
          }}
        >
          {instanceList?.map((item) => {
            return (
              <Instance>
                <StudentName component="div" key={item?.userName}>
                  {item?.userName}
                </StudentName>
                <InstanceName
                  component="div"
                  key={item?.instanceName}
                  onClick={() => navigate("instanceDetail")}
                >
                  {item?.instanceName}
                </InstanceName>
              </Instance>
            );
          })}
        </List>
      </IList>
    </Content>
  );
};
export default InstanceList;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const IList = styled.div`
  background-color: white;
  padding: 2%;
`;

const Instance = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

const InstanceHeader = styled(Instance)`
  border-bottom: 1px solid black;
`;

const StudentName = styled.div`
  width: 40%;
  text-align: center;
`;

const InstanceName = styled.div`
  cursor: pointer;
  width: 60%;
  text-align: center;
`;
