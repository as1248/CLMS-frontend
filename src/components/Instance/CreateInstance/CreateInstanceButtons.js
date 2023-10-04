import axios from "axios";
import styled from "styled-components";
import { useNavigate, redirect, useParams } from "react-router-dom";

//인스턴스 생성 후, 취소 버튼 눌렀을 때 url 수정하기
const CreateInstanceButtons = ({data, validate}) => {
  const navigate = useNavigate();
  const { lectureId } = useParams();
    //인스턴스 생성
  const createInstance = () => {
      if(validate){
        try{
        axios.post('/instances/creation', data).then(setTimeout(()=>{
        redirect('/dashboard');
        navigate('/dashboard');
        },1000));
      } catch (error) {
        console.error(error);
      };
    } else {
      alert('입력이 올바르지 않습니다.');
    }
  }
    return (
    <Btn>
        <Cancel onClick={() => navigate(`/${lectureId}/instanceDetail`)}>취소</Cancel>
        <Create onClick={() => createInstance()}>인스턴스 생성</Create> 
    </Btn>);
  
};
export default CreateInstanceButtons;

const Btn = styled.div`
  width: 100vw;
  height: 35px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-top: -8%;
`;

const Create = styled.div`
  cursor: pointer;
  padding: 5px 15px;
  height: 35px;
  background-color: #3eb5c4;
  border-radius: 20px;
  margin-left: 20px;
  color: white;
  font-weight: 600;
  border: none;
  &:hover{
    background-color: #2da4b3;
  }
`;

const Cancel = styled.div`
  cursor: pointer;
  padding: 4px 15px;
  font-weight: 600;
  border-radius: 20px;
  &:hover{
    background-color: white;
    color: black;
  }
`;