import styled from "styled-components";

const CreateNoticeHeader = () => {
  return (
    <Header>
      <Title>게시글 작성</Title>
      <SubTitle>공지사항</SubTitle>
    </Header>
  );
};

export default CreateNoticeHeader;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-right: 20px;
`;

const SubTitle = styled.div`
  color: #3B99F7;
  font-size: 24px;
  font-weight: 600;
`;