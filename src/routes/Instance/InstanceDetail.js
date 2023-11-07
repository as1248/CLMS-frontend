import styled from "styled-components";
import Header from "../../components/Header";
import InstanceDescription from "../../components/Instance/InstanceDetail/InstanceDescription";
import TabsContent from "../../components/Instance/InstanceDetail/TabsContent";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import LectureNavBar from "../../components/Lecture/LectureNavBar";

const InstanceDetail = () => {
  const userRole = localStorage.getItem('userRole');
  const [instanceDetail,setInstanceDetail] = useState();
  const [domainName,setDomainName] = useState('');
  const [instanceId, setInstanceId] = useState(-1);
  const { lectureId } = useParams();
  const { state } = useLocation();
  
  if(state?.instanceId){
    setInstanceId(state?.instanceId);
  }
  
//인스턴스 id
  useEffect(()=>{
    if(userRole !== 'ROLE_MANAGER'){
      try {
        axios.get(`/instances/id?lectureId=${lectureId}`).then((response)=> {setInstanceId(response.data.instanceId);});
      } catch (error) {
        console.error(error);
      }
    }
},[]);
  useEffect(()=>{
    if(instanceId > 0){
      localStorage.setItem('instanceId', instanceId);
    }
    if(localStorage.getItem('instanceId')){
      setInstanceId(localStorage.getItem('instanceId'));
    }
  },[instanceId]);

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
          <Body>
            <LectureNavBar/>
            <Content>
              <InstanceDescription data={instanceDetail} domainName={domainName} instanceDetail={instanceDetail} setInstanceDetail={setInstanceDetail} instanceId={instanceId}/>
              <TabsContent data={instanceDetail} domainName={domainName} setDomainName={setDomainName} instanceId={instanceId}/>
            </Content>
          </Body>
        ) : (
          <Body>
            <LectureNavBar/>
            <Content>
              <InstanceDescription data={instanceDetail} domainName={domainName} instanceDetail={instanceDetail} setInstanceDetail={setInstanceDetail} instanceId={instanceId}/>
              <NoInstance>인스턴스가 존재하지 않습니다.</NoInstance>
            </Content>
          </Body>
        )}
        <Footer/>
      </>
    );
};

export default InstanceDetail;

const Body = styled.div`
  display: flex;
  min-width: 800px;
  height: 90vh;
`;

const Content = styled.div`
  padding: 0 2%;
  width: 100%;
  height: 100vh;
`;

const NoInstance = styled.div`
  text-align: center;
  font-size: 48px;
  margin-top: 150px;
`;