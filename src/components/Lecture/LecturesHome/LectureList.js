import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../Atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";

const LectureList = () => {
  const navigate = useNavigate();
  const [BASEURL,] = useRecoilState(baseUrl);
  const [lectureList,setLectureList] = useState([
    {
      lectureId: 1,
      lectureName: "Web Programming",
      noticeCount: 0
    },
    {
      lectureId: 2,
      lectureName: "Comprehensive Design",
      noticeCount: 2
    },
    {
      lectureId: 3,
      lectureName: "Software Programming",
      noticeCount: 1
    },
  ]);

  const loadLectures = () => {
    try{
      axios.get(BASEURL + '/lecture?departmentId=1').then((response)=>console.log(response));
    } catch (error) {
      console.error(error);
    };
  }

  useEffect(()=>{
    loadLectures();
  },[BASEURL]);

  return (
    <List>
      {lectureList.map((i)=>{
        return(
          <Lecture key={i?.lectureId}>
            <Title>{i.lectureName}</Title>
            <Detail></Detail>
            <LectureBtn onClick={()=>navigate(`/${i?.lectureId}`)}>
              과목 홈 바로가기 <BsArrowRight size={24} />
            </LectureBtn>
          </Lecture>
        )
      })}
      <CreateLectureBtn onClick={()=>navigate('/createLecture')}>강의 생성하기 +</CreateLectureBtn>
    </List>
  );
};

export default LectureList;

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
  width: 100%;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding-left: 20px;
  font-size: 24px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
`;

const LectureBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 45px;
  border-radius: 25px;
  color: white;
  background-color: #6967c7;
  font-size: 16px;
`;

const CreateLectureBtn = styled(Lecture)`
  cursor: pointer;
  width: 20%;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
