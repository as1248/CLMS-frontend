import styled from "styled-components";
import { useState } from "react";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Notices = () => {
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState([
    {
      title: "asd",
      date: "123asdf",
    },
    {
      title: "asdf",
      date: "123asdfa",
    },
    {
      title: "as",
      date: "123ascdf",
    },
    {
      title: "asd",
      date: "123asdf",
    },
    {
      title: "asdf",
      date: "123asdfa",
    },
    {
      title: "as",
      date: "123ascdf",
    },
    {
      title: "asd",
      date: "123asdf",
    },
    {
      title: "asdf",
      date: "123asdfa",
    },
    {
      title: "as",
      date: "123ascdf",
    },
  ]);
  return (
    <Section>
      <NoticeList>
      <Title>공지사항</Title>
        <InstanceHeader>
          <NoticeTitle>제목</NoticeTitle>
          <NoticeDate>작성 날짜</NoticeDate>
        </InstanceHeader>
        <List
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
        </List>
      </NoticeList>
    </Section>
  );
};

export default Notices;


const Section = styled.section`
  width: 100%;
  padding: 3%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const NoticeList = styled.div`
  background-color: white;
  padding: 2%;
`;

const Notice = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

const InstanceHeader = styled(Notice)`
  border-bottom: 1px solid black;
`;

const NoticeTitle = styled.div`
  width: 60%;
  text-align: center;
`;

const NoticeDate = styled.div`
  cursor: pointer;
  width: 40%;
  text-align: center;
`;