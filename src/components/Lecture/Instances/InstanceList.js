import styled from "styled-components";
import { useState, useEffect } from "react";
import { List } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LectureNav from "../LectureNav";

const InstanceList = () => {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const [instanceList, setInstanceList] = useState([]);

  useEffect(()=>{
    try{
      axios.get(`/instances/list?lectureId=${lectureId}`).then((response)=>setInstanceList(response.data.instances));
    } catch (error) {
      console.error(error);
    };
  },[]);

  return (
    <Content>
      <LectureNav/>
      <IList>
        <Title>인스턴스 목록</Title>
        {instanceList?.length === 0 ? (
          <NoInstance>해당 강의에 생성된 인스턴스가 없습니다.</NoInstance>
        ) : (
          <>
            <InstanceHeader>
              <InstanceCount> </InstanceCount>
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
                    <InstanceCount></InstanceCount>
                    <StudentName component="div" key={item?.userName}>
                      {item?.userName}
                    </StudentName>
                    <InstanceName
                      component="div"
                      key={item?.instanceId}
                      onClick={() => navigate(`/${lectureId}/instanceDetail`,{state:{instanceId: item?.instanceId}})}
                    >
                      {item?.name}
                    </InstanceName>
                  </Instance>
                );
              })}
            </List>
          </>
        )}
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

const NoInstance = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 50px;
  font-weight: bold;
  color: gray;
`;

const Instance = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

const InstanceHeader = styled(Instance)`
  border-bottom: 1px solid black;
`;

const InstanceCount = styled.div`
  width: 10%;
  text-align: center;
`;

const StudentName = styled.div`
  width: 40%;
  text-align: center;
`;

const InstanceName = styled.div`
  cursor: pointer;
  width: 50%;
  text-align: center;
`;
