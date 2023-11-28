import styled from "styled-components";

const DocumentsGithub = () => {
  return (
    <Content>
      <Title>GitHub</Title>
      <List>
        <SubTitle>프론트엔드</SubTitle>
        <SubContent href="https://github.com/as1248/CLMS-frontend" target="_blank">
          https://github.com/as1248/CLMS-frontend
        </SubContent>
      </List>
      <List>
        <SubTitle>백엔드</SubTitle>
        <SubContent href="https://github.com/DonghyeonKang/CLMS-backend" target="_blank">
          https://github.com/DonghyeonKang/CLMS-backend
        </SubContent>
      </List>
    </Content>
  );
}

export default DocumentsGithub;

const Content = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  
`;

const List = styled.div`
  margin-top: 50px;
`;

const SubTitle = styled.div`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 400;
`;

const SubContent = styled.a`
  cursor: pointer;
  width: 90%;
  font-size: 18px;
  margin-left: 20px;
  display: flex;
`;