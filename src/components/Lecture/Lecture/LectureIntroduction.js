import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import TextField from '@mui/material/TextField';

const LectureIntroduction = () => {
  const userRole = localStorage.getItem('userRole');
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const [lectureDetail, setLectureDetail] = useState({});
  const [editIntro, setEditIntro] = useState(false);
  const [name,setName] = useState();
  const [intro,setIntro] = useState();
  
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const introHandler = (e) => {
    setIntro(e.target.value);
  };

  const editLecture = () => {
    
  }

  const deleteLecture = () => {
    if(window.confirm('강의를 삭제하시겠습니까?')){
      try{
        axios.delete(`/lecture?id=${lectureId}`).then(response=>{
          if(response.status === 200){
            navigate('/lecturesHome');
          }
        });
      } catch (error) {
        console.error(error);
      };
    }else{
      return;
    }
  };

  useEffect(()=>{
    try{
      axios.get(`/lecture/detail?id=${lectureId}`).then((response)=>{
        setLectureDetail(response.data);
        setName(response.data.lectureName);
        setIntro(response.data.introducing);
      });
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  return (
    <Content>
        {editIntro ? (
        <Container>
          <TextField label="강의 명" variant="outlined" value={name} onChange={nameHandler} inputProps={{ maxLength: 50 }} style={{width:'60%', marginBottom:'10px'}}/>
          <TextField label="강의 소개" variant="outlined" value={intro} onChange={introHandler} multiline rows={4} />
        </Container>
      ) : (
        <Container>
          <Title>{lectureDetail?.lectureName}</Title>
          <Info>
            {lectureDetail?.introducing}
          </Info>
        </Container>)
        }
        <>
        {editIntro ? (
          <EditBtns>
            <Button variant="outlined" color="error" onClick={()=>setEditIntro(prev=>!prev)} style={{fontSize:'18px'}}>취소</Button>
            <Button variant="outlined" style={{width:'150px', fontSize:'18px'}}>변경사항 저장</Button>
          </EditBtns>) : (<></>)}
        {userRole === 'ROLE_MANAGER' ? (
          editIntro ? (
          <BtnsContainer>
            <Button variant="outlined" disabled><BiEdit size={36}/></Button>
            <Button variant="outlined" color="error" disabled><MdOutlineDeleteForever size={36}/></Button>
          </BtnsContainer>
          ) : (
          <BtnsContainer>
            <Button variant="outlined" onClick={()=>setEditIntro(prev=>!prev)}><BiEdit size={36}/></Button>
            <Button variant="outlined" color="error" onClick={()=>deleteLecture()}><MdOutlineDeleteForever size={36}/></Button>
          </BtnsContainer>
        )) : (<></>)}
        </>
    </Content>
  );
}

export default LectureIntroduction;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 2%;
  margin-bottom: 30px;
  min-width: 500px;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 60%;
  height: auto;
  min-width: 300px;
`;

const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  min-width: 150px;
`;

const EditBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
  font-size: 18px;
`;