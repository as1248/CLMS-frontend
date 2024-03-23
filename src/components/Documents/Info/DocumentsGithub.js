import styled from "styled-components";
import Content from "../Content";
import Title from "../Title";
import List from "../List";
import SubTitle from "../SubTitle";

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

const SubContent = styled.a`
  cursor: pointer;
  width: 90%;
  font-size: 18px;
  margin-left: 20px;
  display: flex;
`;