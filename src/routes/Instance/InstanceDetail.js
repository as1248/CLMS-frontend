import styled from "styled-components";
import Header from "../../components/Header";
import InstanceDescription from "../../components/Instance/InstanceDetail/InstanceDescription";
import TabsContent from "../../components/Instance/InstanceDetail/TabsContent";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const InstanceDetail = () => {
  const [instanceDetail,setInstanceDetail] = useState();
  const [domainName,setDomainName] = useState('');
  const [instanceId, setInstanceId] = useState(-1);
  const { lectureId } = useParams();

//인스턴스 id
  useEffect(()=>{
    try {
      axios.get(`/instances/id?lectureId=${lectureId}`).then((response)=> setInstanceId(response.data.instanceId));
    } catch (error) {
      console.error(error);
    }
},[]);

  //인스턴스 상세
  useEffect(()=>{
    if(instanceId > 0){
      try {
        axios.get(`/instances/detail?instanceId=${instanceId}`).then((response)=> setInstanceDetail(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    },[instanceId]);
  //인스턴스 도메인
  useEffect(()=>{
    if(instanceId > 0){
      try {
        axios.get(`/instances/domain?instanceId=${instanceId}`).then((response)=> setDomainName(response.data.domainName));
      } catch (error) {
        console.error(error);
      }
    }
  },[instanceId]);

    return (
      <>
        <Header/>
        {instanceId > 0 ? (
          <Content>
            <InstanceDescription data={instanceDetail} domainName={domainName} setInstanceDetail={setInstanceDetail} instanceId={instanceId}/>
            <TabsContent data={instanceDetail} domainName={domainName} setDomainName={setDomainName} instanceId={instanceId}/>
          </Content>
        ) : (
          <Content>
            <InstanceDescription data={instanceDetail} domainName={domainName} setInstanceDetail={setInstanceDetail} instanceId={instanceId}/>
            <NoInstance>인스턴스가 존재하지 않습니다.</NoInstance>
          </Content>
        )}
      </>
    );
};

export default InstanceDetail;

const Content = styled.div`
  padding: 0 5%;
  min-height: 80vh;
  margin-bottom: 120px;
`;

const NoInstance = styled.div`
  text-align: center;
  font-size: 48px;
  margin-top: 150px;
`;