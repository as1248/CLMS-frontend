import styled from "styled-components";
import { useState } from "react";
import { List } from "@mui/material";

const InstanceList = () => {
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
    <Section>
      <Title>인스턴스 목록</Title>
      <IList>
        <Instance>
          <StudentName>이름</StudentName>
          <InstanceName>인스턴스 이름</InstanceName>
        </Instance>
        <List
          style={{
            maxHeight: 300,
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
                <InstanceName component="div" key={item?.instanceName}>
                  {item?.instanceName}
                </InstanceName>
              </Instance>
            );
          })}
        </List>
      </IList>
    </Section>
  );
};
export default InstanceList;

const Section = styled.section`
  border: 1px solid black;
  width: 100%;
  padding: 3%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const IList = styled.div``;

const Instance = styled.div`
  border: 1px solid black;
  display: flex;
  height: 60px;
  align-items: center;
`;
const StudentName = styled.div`
  width: 40%;
  text-align: center;
`;
const InstanceName = styled.div`
  width: 60%;
  text-align: center;
`;
