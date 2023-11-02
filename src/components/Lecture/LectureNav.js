import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const LectureNav = () => {
  const { lectureId } = useParams();
  const [lectureName, setLectureName] = useState();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    try{
      axios.get(`/lecture/detail?id=${lectureId}`).then((response)=>setLectureName(response.data.lectureName));
    } catch (error) {
      console.error(error);
    };
  },[lectureId]);

  return(
    <Nav>
      <LectureHome onClick={()=>navigate(`/${lectureId}`)}>{lectureName}</LectureHome>
      {pathname.split('/')[2] === 'notice' ? (' > 공지사항') : pathname.split('/')[2] === 'instances' ? (' > 인스턴스 목록') : ''}

    </Nav>
  );
}

export default LectureNav;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 2%;
  font-size: 24px;
`;

const LectureHome = styled.div`
  cursor: pointer;
  padding: 2px;
  margin-right: 10px;
`