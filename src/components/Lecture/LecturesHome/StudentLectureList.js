import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { loadStudentLectures } from "../../../API/Lecture";
import LectureList from "./LectureList";

const StudentLectureList = () => {
  const navigate = useNavigate();
  const [lectureList,setLectureList] = useState([]);

  const { isError, error, data } = useQuery('loadStudentLectures', ()=>loadStudentLectures());

useEffect(()=>{
    if(data){
      setLectureList(data);
    }
  },[data]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <List>
      <LectureList lectureList={lectureList}/>
      <CreateLectureBtn onClick={()=>navigate('/enrolment')}>수강신청하기 +</CreateLectureBtn>
    </List>
  );
};

export default StudentLectureList;

const List = styled.div`
  margin: 2%;
  margin-left: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`;

const Lecture = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  min-width: 650px;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  background-color: white;
`;

const CreateLectureBtn = styled(Lecture)`
  cursor: pointer;
  width: 20%;
  min-width: 200px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;