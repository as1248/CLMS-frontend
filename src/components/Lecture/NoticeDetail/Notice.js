import styled from "styled-components";
import NoticeButton from "./NoticeButton";

const Notice = () => {
  return (
    <Content>
      <Box>
        <NoticeButton/>
        <Container>
          <ManageBar/>
          <Detail>
            <Title>공지 1</Title>
            <div>첫 번째 공지사항입니다.</div>
          </Detail>
        </Container>
      </Box>
    </Content>
  );
};

export default Notice;

const Content = styled.div`
  width: 100%;
  padding: 3%;
`;

const Box = styled.div`
  background-color: white;
  padding: 3%;
`;

const Container = styled.div`
`;

const ManageBar = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #cdd2d5;
  border-bottom: none;
  height: 60px;
`;

const Detail = styled.div`
  padding: 3%;
  border: 1px solid #cdd2d5;
  padding-bottom: 80px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
`;

