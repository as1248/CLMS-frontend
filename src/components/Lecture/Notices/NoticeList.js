import styled from "styled-components";
import { useState } from "react";
import { List } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NoticeHeader from "./NoticeHeader";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";

const NoticeList = () => {
  const navigate = useNavigate();
  const [deleteNotice, setDeleteNotice] = useState(false);
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
  
  const [deleteList, setDeleteList] = useState([]);
  const handleChange = (event) => {
    const value = event.target.value;
    if(deleteList.includes(value)){
      setDeleteList(prev=>prev.filter(i=>i!==value));
    }else{
      setDeleteList(prev=>[...prev, value]);
    }
  };
  useEffect(()=>{
    console.log(deleteList);
  },[deleteList]);

  return (
    <Content>
      <NList>
      <NoticeHeader setDeleteNotice={setDeleteNotice}/>
        {<List style={{maxHeight: 600, overflow: "auto"}}>
            {noticeList?.sort((a,b)=>b.noticeId-a.noticeId)?.map((item) => {
              return (
              <Box>
                {deleteNotice && <Checkbox onChange={handleChange} value={item?.noticeId} style={{marginRight:'20px'}}/>}
                <Notice key={item?.noticeId}>
                    <Left onClick={()=>navigate(`${item.noticeId}`)}>
                      <NoticeTitle>{item.title}</NoticeTitle>
                      <NoticeContent>새 공지사항 입니다.</NoticeContent>
                    </Left>
                  <Right>
                    <Date>게시일시 : </Date>
                    <Date>2023년 9월 9일 오후 4:02</Date>
                  </Right>
                </Notice>
              </Box>
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

const Box = styled.div`
  display: flex;
  align-items: center;
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
