import styled from "styled-components";
import { useState } from "react";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState();
  return (
    <Content>
      <NList>
        <Title>공지사항</Title>
        <Notice>
          <Left>
            <NoticeTitle>공지 2</NoticeTitle>
            <NoticeContent>새 공지사항 입니다.</NoticeContent>
          </Left>
          <Right>
            <Date>게시일시 : </Date>
            <Date>2023년 9월 9일 오후 4:02</Date>
          </Right>
        </Notice>
        <Notice>
          <Left>
            <NoticeTitle>공지 1</NoticeTitle>
            <NoticeContent>공지사항 입니다.</NoticeContent>
          </Left>
          <Right>
            <Date>게시일시 : </Date>
            <Date>2023년 9월 9일 오후 4:02</Date>
          </Right>
        </Notice>

        {/*<List
          style={{
            maxHeight: 380,
            overflow: "auto",
            border: "1px solid #eaeded",
          }}
        >
          {noticeList?.map((item) => {
            return (
              <Notice>
                <NoticeTitle component="div" key={item?.title}>
                  {item?.title}
                </NoticeTitle>
                <NoticeDate component="div" key={item?.date} onClick={()=>navigate('instanceDetail')}>
                  {item?.date}
                </NoticeDate>
              </Notice>
            );
          })}
        </List>*/}
      </NList>
    </Content>
  );
};

export default NoticeList;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const NList = styled.div`
  background-color: white;
  padding: 2%;
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding: 15px;
  margin-bottom: 20px;
`;

const Left = styled.div`
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
