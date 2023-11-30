import styled from "styled-components";
import ConnectDomain1 from '../../../img/Documents/ConnectDomain/ConnectDomain1.png';
import ConnectDomain2 from '../../../img/Documents/ConnectDomain/ConnectDomain2.png';
import ConnectDomain3 from '../../../img/Documents/ConnectDomain/ConnectDomain3.png';
import ConnectDomain4 from '../../../img/Documents/ConnectDomain/ConnectDomain4.png';

const DocumentsConnectDomain = () => {
  return (
    <Content>
      <Title>도메인 연결</Title>
      <List>
        <SubTitle>저희 CLMS에 도메인 연결을 하는 방법을 제공하는 문서입니다. </SubTitle>

        <SubContent>
          {`1) 로그인 이후 메인 페이지 상단의 <강의 목록> 버튼을 클릭하여 강의 목록 페이지로 이동합니다.`}
        </SubContent>
        <Image src={ConnectDomain1} />

        <SubContent>
          {`2) <과목 홈 바로가기> 버튼을 클릭하여 원하는 강의 홈으로 이동합니다.`}
        </SubContent>
        <Image src={ConnectDomain2} />

        <SubContent>
          {`3) <인스턴스> 버튼을 클릭하여 인스턴스 페이지로 이동합니다.`}
        </SubContent>
        <Image src={ConnectDomain3} />

        <SubContent>
          {`4) 하단의 <도메인 적용> 탭을 클릭합니다.`}
        </SubContent>
        <Image src={ConnectDomain4} />

        <SubContent>
          {`5) 소유하고 있는 도메인 주소를 입력란에 기입하고 <확인> 버튼을 클릭하여 도메인을 연결합니다.`}
        </SubContent>
      </List>
    </Content>
  );
}

export default DocumentsConnectDomain;

const Content = styled.div`
  width: 100%;
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
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const Image = styled.img`
  width: 1000px;
  margin-bottom: 80px;
`;