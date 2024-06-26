import { useEffect, useState } from "react";
import { redirect, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import InboundRule from "./InboundRule";
import axios from "axios";
import NewInboundRule from "./NewInboundRule";

const EditInboundRules = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {lectureId} = useParams();
    const [number,setNumber] = useState(1);
    const [data,setData] = useState([]);
    const [newData,setNewData] = useState([]);
    const [reqData, setReqData] = useState([]);
    const [allValidate,setAllValidate] = useState(false);
    const validation = (str) => {
      const reg = /^(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|5\d{4}|4\d{4}|3\d{4}|2\d{4}|1\d{4}|[1-9]\d{0,3}|[0])$/;
      return reg.test(Number(str));
    }

    //규칙 추가 함수
    const addData = () => {
        setNewData((prev) => [...prev,{
        id: -1,
        hostPort: null,
        instancePort: null,
        instanceId: Number(state?.instanceId),
        number: number
        }]);
        setNumber((prev)=>prev+1);
    };
    //인바운드 규칙 저장
    const saveInboundRules = () => {
      if(allValidate){
        try {
          axios.put(`/instances/inbounds/setting`, reqData).then((response)=> console.log(response));
        } catch (error) {
          console.error(error);
        }
        redirect(`/${state?.instanceId}/instanceDetail`);
        navigate(`/${state?.instanceId}/instanceDetail`);
      } else {
        alert('올바른 포트를 입력해 주세요.');
      }
    };
    //포트 입력에 대한 유효성 검사
    useEffect(()=>{
      const newArr = newData?.map((i)=>{
        const {number, ...rest} = i;
        return rest;
      });
      let ary = [];
      if(data){
        setReqData([...data, ...newArr]);
        ary = [...data, ...newArr];
      } else{
        setReqData(newArr);
        ary = newArr;
      }
      const arr = ary?.map((i)=>validation(i?.instancePort));
      let validate = arr[0];
      for(let i=0;i<arr.length;i++){
        validate = validate && arr[i];
      }
      setAllValidate(validate);
    },[data, newData])


    useEffect(()=>{
      try {
        axios.get(`/instances/inbounds/list?instanceId=${state?.instanceId}`).then((response)=> setData(response?.data?.inbounds));
      } catch (error) {
        console.error(error);
      }
    },[]);

    return (
        <>
          <Title>인바운드 규칙 편집</Title>
            <Container>
                <Rules>
                <tbody>
                <tr>
                    <RulesHeader style={{width:'200px'}}>인바운드 규칙 ID</RulesHeader>
                    <RulesHeader style={{width:'200px'}}>프로토콜</RulesHeader>
                    <RulesHeader style={{width:'300px'}}>서버 포트 범위</RulesHeader>
                    <RulesHeader style={{width:'300px'}}>인스턴스 포트 범위</RulesHeader>
                    <th> </th>
                </tr>
                {data?.map((i)=>{
                    return(<InboundRule data={data} setData={setData} i={i} key={i?.id}/>)})
                }
                {newData?.map((i)=>{
                    return(<NewInboundRule newData={newData} setNewData={setNewData} i={i} key={i?.number}/>)})
                }
                </tbody>
                </Rules>
            </Container>
            <BtnSection>
            <AddRule onClick={()=>addData()}>규칙 추가</AddRule>
            <div style={{display: 'flex'}}>
                <Cancel onClick={() => navigate(`/${lectureId}/instanceDetail`)}>취소</Cancel>
                <SaveRules onClick={()=>saveInboundRules()}>인바운드 규칙 저장</SaveRules>
            </div>
          </BtnSection>
        </>
    );
};

export default EditInboundRules;

const Container = styled.div`
display: flex;
width: 100%;
min-width: 900px;
margin: 3% 0;
border: 1px solid #dbdfe0;
border-radius: 20px;
background-color: #ffffff;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
`;
const Rules = styled.table`
  width: 100%;
  border-spacing: 3vw;
`;

const RulesHeader = styled.th`
  text-align: left;
  margin-right: 5vw;
  width: 30%;
`;

const BtnSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddRule = styled.div`
  cursor: pointer;
  border: 3px solid #3eb5c4;
  height: 35px;
  padding: 4px 15px;
  background-color: white;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.4s;
  &:hover{
    background-color: #fafafa;
    border-color: #2da4b3;
    color: black;
  }
`

const SaveRules = styled.div`
  cursor: pointer;
  margin-left: 20px;
  padding: 4px 15px;
  background-color: #3eb5c4;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  transition: all 0.4s;
  &:hover{
    background-color: #2da4b3;
  }
`;

const Cancel = styled.div`
  cursor: pointer;
  padding: 4px 15px;
  border: 3px solid #3eb5c4;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.4s;
  &:hover{
    background-color: white;
    color: black;
  }
`;