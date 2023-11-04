import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { List } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import NoticeHeader from "./NoticeHeader";
import axios from 'axios';
import LectureNav from "../LectureNav";

const NoticeList = () => {
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const [noticeList, setNoticeList] = useState([]);

  useEffect(()=>{
    try{
      axios.get(`/lecture/notice/list?id=${lectureId}`).then((response)=>setNoticeList(response.data.notices));
    } catch (error) {
      console.error(error);
    };
  },[]);

//공지사항 상세로 페이지 넘어갈 때 배열에서 해당 공지 내용 navigate에 전달하기
  return (
    <Content>
      <LectureNav/>
      <NList>
      <NoticeHeader/>
        {noticeList.length === 0 ? (
          <NoNotice>공지사항이 없습니다.</NoNotice>
        ) : (
          <List style={{maxHeight: 600, overflow: "auto"}}>
          {noticeList?.sort((a,b)=>b.noticeId-a.noticeId)?.map((item) => {
            return (
              <Notice key={item?.noticeId}>
                  <Left onClick={()=>navigate(`${item?.noticeId}`,{state:{item}})}>
                    <NoticeTitle>{item?.title}</NoticeTitle>
                    <NoticeContent>{item?.content.length >= 60 ? item?.content.slice(0,60)+'...' : item?.content}</NoticeContent>
                  </Left>
                <Right>
                  <Date>게시일시 : </Date>
                  <Date>{item?.createAt}</Date>
                </Right>
              </Notice>
            );
          })}
        </List>
        )}
      </NList>
    </Content>
  );
};

export default NoticeList;

const Content = styled.div`
  width: 100%;
  min-width: 800px;
  height: 90vh;
  padding-top: 2%;
`;

const NList = styled.div`
  background-color: white;
  padding: 2%;
  height: 100%;
  min-height: 600px;
`;

const NoNotice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 50px;
  font-weight: bold;
  color: gray;
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding: 15px;
  margin-bottom: 20px;
`;

const Left = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NoticeTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const NoticeContent = styled.div`
  font-size: 20px;
`;

const Date = styled.div`
  font-size: 16px;
  text-align: end;
`;
