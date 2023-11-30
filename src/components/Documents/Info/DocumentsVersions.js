import styled from "styled-components";

const DocumentsVersions = () => {
  return (
    <Content>
      <Title>버전 관리</Title>
      <List>
        <SubTitle>서비스 버전</SubTitle>
        <SubContent>
          <Version>버전 0.1 - 작은 버전</Version>
          <div>프로토 타입</div>
          <Version>버전 0.5 - 종설프 발표 때 버전</Version>
          <div>기능 추가</div>
          <div>기능 업데이트</div>
          <Version>버전 0.9 - 현재</Version>
          <div>기능 추가</div>
          <div>디자인 변경</div>
          <div>기능 업데이트</div>
        </SubContent>
      </List>
      <List>
        <SubTitle>패키지 버전</SubTitle>
        <SubContent>
          <Version>0.5.0 - 작은 버전</Version>
          <div>프로토타입</div>
          <Version>1.0.0 - 현재</Version>
          <div>기능 추가</div>
          <div>구조 업데이트</div>
        </SubContent>
      </List>
    </Content>
  );
}

export default DocumentsVersions;

const Content = styled.div`
  width: 100%;
  min-width: 700px;
  padding: 20px 40px;
  background-color: white;
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

const SubContent = styled.div`
  width: 90%;
  font-size: 18px;
  margin-left: 40px;
`;

const Version = styled.div`
  font-size: 24px;
  margin: 30px 0 10px -20px;
`;