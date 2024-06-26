import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const LectureNav = ({title=''}) => {
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
      <Navigator onClick={()=>navigate(`/${lectureId}`)}>{lectureName}</Navigator>
      {pathname.split('/')[2] ? (' > ') : ''}
      {pathname.split('/')[2] === 'notice' ? (
      <Navigator onClick={()=>navigate(`/${lectureId}/notice`)}>공지사항</Navigator>
      ) : pathname.split('/')[2] === 'instances' ? (
      <Navigator onClick={()=>navigate(`/${lectureId}/instances`)}>인스턴스 목록</Navigator>) : ''}
      {pathname.split('/')[3] === undefined ? '' : pathname.split('/')[3] === 'createNotice' ? (` > 공지사항 작성`) : ` > ${title}`}
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
  min-width: 600px;
`;

const Navigator = styled.div`
  cursor: pointer;
  margin: 0 10px;
  min-width: 100px;
  &:hover{
    text-decoration: underline;
  }
`;