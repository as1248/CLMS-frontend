import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { List } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import NoticeHeader from "./NoticeHeader";
import axios from 'axios';

const NoticeList = () => {
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const [noticeList, setNoticeList] = useState([
    {
      noticeId: 1,
      title: "공지사항 입니당",
      lectureId: 1,
    },
    {
      noticeId: 2,
      title: "공지사항 입니다22",
      lectureId: 1,
    },
    {
      noticeId: 3,
      title: "공지사항 입니당33",
      lectureId: 1,
    },
  ]);

  const loadNotices = () => {
    try{
      axios.get(`/lecture/notice/list?id=${lectureId}`).then((response)=>setNoticeList(response.data.notices));
    } catch (error) {
      console.error(error);
    };
  }

  useEffect(()=>{
    loadNotices();
  },[]);

//공지사항 상세로 페이지 넘어갈 때 배열에서 해당 공지 내용 navigate에 전달하기
  return (
    <Content>
      <NList>
      <NoticeHeader/>
        {<List style={{maxHeight: 600, overflow: "auto"}}>
            {noticeList?.sort((a,b)=>b.noticeId-a.noticeId)?.map((item) => {
              return (
                <Notice key={item?.noticeId}>
                    <Left onClick={()=>navigate(`${item?.noticeId}`,{state:{item}})}>
                      <NoticeTitle>{item?.title}</NoticeTitle>
                      <NoticeContent>{item?.content}</NoticeContent>
                    </Left>
                  <Right>
                    <Date>게시일시 : </Date>
                    <Date>{item?.createdAt}</Date>
                  </Right>
                </Notice>
              );
            })}
          </List>}
      </NList>
    </Content>
  );
};

export default NoticeList;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const NList = styled.div`
  background-color: white;
  padding: 2%;
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
