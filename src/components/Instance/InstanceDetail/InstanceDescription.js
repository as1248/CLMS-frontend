import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate, redirect } from "react-router-dom";
import styled from "styled-components";

//userId, address(ip주소) 받아오는 기능 추가하기
const InstanceDescription = ({data, domainName, setInstanceDetail, userId=1, address=1}) => {
  const navigate = useNavigate();
  const [IOption, setIOption] = useState(false);
  //URL 바뀌어서 instanceId 다른데서 받기
  const {instanceId} = useParams();
  //인스턴스 시작
  const instanceStart = () => {
    try{
      axios.post('/instances/start', {instanceId}).then(setInstanceDetail(prev=>({...prev, state: 'running'})));
    } catch (error) {
      console.error(error);
    };
    setIOption((prev)=>!prev);
  };
  //인스턴스 중지
  const instanceStop = () => {
    try{
      axios.post('/instances/stop', {instanceId}).then(setInstanceDetail(prev=>({...prev, state: 'stopped'})));
    } catch (error) {
      console.error(error);
    };
    setIOption((prev)=>!prev);
  };
  //인스턴스 재부팅
  const instanceRestart = () => {
    try{
      axios.post('/instances/restart', {instanceId}).then(setInstanceDetail(prev=>({...prev, state: 'running'})));
    } catch (error) {
      console.error(error);
    };
    setIOption((prev)=>!prev);
  };
  //인스턴스 종료
  const instanceDelete = () => {
    try{
      axios.post('/instances/delete', {instanceId}).then(redirect('/dashboard'));
    } catch (error) {
      console.error(error);
    };
    setIOption((prev)=>!prev);
    navigate('/dashboard');
  };

    return (
        <>
            <DetailHeader>
              <Title>인스턴스 요약</Title>
              <InstanceState>
                <State onClick={()=>{setIOption((prev)=>!prev)}}>{IOption ? '인스턴스 상태 ▲' : '인스턴스 상태 ▼'}</State>
                {IOption ? (
                  <SetStates>
                    <SetState onClick={()=>instanceStart()}>인스턴스 시작</SetState>
                    <SetState onClick={()=>instanceStop()}>인스턴스 중지</SetState>
                    <SetState onClick={()=>instanceRestart()}>인스턴스 재부팅</SetState>
                    <SetState onClick={()=>instanceDelete()}>인스턴스 종료</SetState>
                  </SetStates>) : (<></>)}
              </InstanceState>
              <InstanceCreate onClick={() => navigate('createInstance',{state: {userId, address}})}>인스턴스 생성</InstanceCreate>
            </DetailHeader>
            
            <DescriptionContent>
                <DescriptionGrid>
                  <GridTitle>인스턴스 ID</GridTitle>
                  <GridContent>{data?.instanceId}</GridContent>
                </DescriptionGrid>
                <DescriptionGrid>
                  <GridTitle>퍼블릭 IPv4 주소</GridTitle>
                  <GridContent>{data?.address}</GridContent>
                </DescriptionGrid>
                <DescriptionGrid>
                  <GridTitle>인스턴스 상태</GridTitle>
                  <GridContent>{data?.state}</GridContent>
                </DescriptionGrid>
                <DescriptionGrid>
                  <GridTitle>퍼블릭 IPv4 DNS</GridTitle>
                  <GridContent>{domainName}</GridContent>
                </DescriptionGrid>
                <DescriptionGrid>
                  <GridTitle>자동 할당 IP 주소(퍼블릭 IP)</GridTitle>
                  <GridContent>{data?.address}</GridContent>
                </DescriptionGrid>
            </DescriptionContent>
        </>
        
    );
};

export default InstanceDescription;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  width: 100%;
  min-width: 900px;
  margin: 20px 0;
`;

const Title = styled.div`
  width: 70%;
  min-width: 500px;
  padding: 1%;
  font-size: 20px;
  font-weight: 600;
`;

const InstanceState = styled.div`
  cursor: pointer;
  border: 0.5px solid #879596;
  margin-right: 2%;
  min-width: 190px;
`;

const State = styled.div`
  padding: 4px 15px;
  width: 190px;
  font-weight: 600;
  background-color: white;
  &:hover{
    background-color: #fafafa;
    color: black;
  }
`;

const SetStates = styled.div`
  background-color: white;
  position: absolute;
`;

const SetState = styled.div`
  padding: 4px 15px;
  border: 0.5px solid #879596;
  font-weight: 600;
  width: 190px;
  &:hover{
    background-color: #fafafa;
    border: 2px solid #879596;
    color: black;
  }
`;

const InstanceCreate = styled.div`
  cursor: pointer;
  padding: 6px 15px;
  min-width: 160px;
  height: 35px;
  background-color: #3eb5c4;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  &:hover{
    background-color: #2da4b3;
  }
`

const DescriptionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3,33%);
  grid-auto-flow: row;
  width: 100%;
  min-width: 900px;
  margin-bottom: 5%;
  background-color: #ffffff;
  border: 2px solid #f2f3f3;
  border-radius: 20px;
`;

const DescriptionGrid = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`

const GridTitle = styled.div`
  margin: 3%;
  font-size: 16px;
  font-weight: 100;
`;

const GridContent = styled.div`
  margin-left: 5%;
  font-size: 20px;
`;