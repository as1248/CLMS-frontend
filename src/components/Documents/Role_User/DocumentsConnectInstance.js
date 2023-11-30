import styled from "styled-components";
import ConnectInstance1 from '../../../img/Documents/ConnectInstance/ConnectInstance1.png';
import ConnectInstance2 from '../../../img/Documents/ConnectInstance/ConnectInstance2.png';
import ConnectInstance3 from '../../../img/Documents/ConnectInstance/ConnectInstance3.png';
import ConnectInstance4 from '../../../img/Documents/ConnectInstance/ConnectInstance4.png';
import ConnectInstance5 from '../../../img/Documents/ConnectInstance/ConnectInstance5.png';

const DocumentsConnectInstance = () => {
  return (
    <Content>
      <Title>인스턴스 접속</Title>
      <List>
        <SubTitle>저희 CLMS에서 생성한 환경에 접속하는 방법을 제공하는 문서입니다.</SubTitle>

        <SubContent>
          {`1) 로그인 이후 메인 페이지 상단의 <강의 목록> 버튼을 클릭하여 강의 목록 페이지로 이동합니다.`}
        </SubContent>
        <Image src={ConnectInstance1} />

        <SubContent>
          {`2) <과목 홈 바로가기> 버튼을 클릭하여 접속할 인스턴스가 존재하는 강의의 홈으로 이동합니다.`}
        </SubContent>
        <Image src={ConnectInstance2} />

        <SubContent>
          {`3) <인스턴스> 버튼을 클릭하여 인스턴스 페이지로 이동합니다.`}
        </SubContent>
        <Image src={ConnectInstance3} />

        <SubContent>
          {`4) 인스턴스의 Public IPv4 주소와 키-페어 이름을 확인합니다.`}
        </SubContent>
        <SubContent>
          {`(인스턴스 상태가 ‘동작 중(running)’이 아닐 경우, 우측 상단의 <인스턴스 상태> 리스트를 클릭하여 <인스턴스 시작>을 클릭합니다.)`}
        </SubContent>
        <Image src={ConnectInstance4} />

        <SubContent>
          {`5) 하단의 <보안> 탭을 클릭하여 인스턴스의 port 번호를 확인합니다.`}
        </SubContent>
        <Image src={ConnectInstance5} />

        <SubContent>
          {`6) OS의 터미널을 실행하여 개인키가 저장된 디렉토리로 이동한 후, 다음과 같은 명령어를 입력하여 인스턴스에 접속합니다.`}
        </SubContent>
        <CodeBox>{`ssh -i "<개인키 이름>" <계정명>@<접속할 서버 IP Address> -p <port 번호>`}</CodeBox>
      </List>
    </Content>
  );
}

export default DocumentsConnectInstance;

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
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const Image = styled.img`
  width: 80%;
  min-width: 600px;
  margin-bottom: 80px;
`;

const CodeBox = styled.div`
  background-color: #f7f6f3;
  margin-left: 30px;
  margin-bottom: 40px;
  padding: 20px;
  font-size: 16px;
  width: 70%;
  min-width: 600px;
  border-radius: 5px;
  font-family: SFMono-Regular, Menlo, Consolas, 'PT-Mono', 'Liberation Mono', Courier;
`;