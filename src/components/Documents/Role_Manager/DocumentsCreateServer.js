import styled from "styled-components";
import CreateServer1 from '../../../img/Documents/CreateServer/CreateServer1.png';
import CreateServer2 from '../../../img/Documents/CreateServer/CreateServer2.png';
import CreateServer3 from '../../../img/Documents/CreateServer/CreateServer3.png';
import CreateServer4 from '../../../img/Documents/CreateServer/CreateServer4.png';

const DocumentsCreateServer = () => {
  return (
    <Content>
      <Title>서버 등록</Title>
      <List>
        <SubTitle>저희 CLMS에 서버를 등록할 수 있는 방법을 제공하는 문서입니다.</SubTitle>

        <SubTitle>1. 서버 요구 사항</SubTitle>
        
        <SubContent>
          {`RAM - 최소 4GB 이상`}
        </SubContent>
        <SubContent>
          {`설치 운영체제 - Ubuntu Server 20.04 LTS`}
        </SubContent>
        <SubContent>
          {`IP Address - 고정 IP 할당 필요`}
        </SubContent>
      </List>

      <List>
        <SubTitle>2. 패키지 다운로드 및 설치</SubTitle>

        <SubContent>
          {`1) 다음 명령어를 입력하여 패키지를 CLMS로 부터 설치합니다.`}
        </SubContent>
        <CodeBox>{`wget http://clms.kro.kr/server/register/installing -o Automation.tar`}</CodeBox>

        <SubContent>
          {`2) 다음 명령어를 차례로 입력하여 tar 아카이브 파일의 압축을 해제합니다.`}
        </SubContent>
        <SubContent>
          {`(현재 로그인 된 계정의 홈 디렉토리에 위치해야 합니다.)`}
        </SubContent>
        <CodeBox>
          <div>{`cd ~`}</div>
          <div>{`tar -xvf Automation.tar`}</div>
        </CodeBox>

        <SubContent>
          {`3) 파일 압축 해제 후 다음 명령어를 입력하여 CLMS 서버 설치 패키지를 실행하면 패키지 설치가 완료됩니다.`}
        </SubContent>
        <SubContent>
          {`(설치 종료 후 자동으로 리눅스 접속이 종료됩니다.)`}
        </SubContent>
        <CodeBox>{`sh ./ServerAutomation.sh <사용자 계정 비밀번호>`}</CodeBox>
      </List>

      <List>
        <SubTitle>3. 웹 페이지 등록</SubTitle>

        <SubContent>
          {`1) 로그인 후 헤더의 <강의 목록> 버튼을 클릭하여 페이지를 이동합니다.`}
        </SubContent>
        <Image src={CreateServer1} />

        <SubContent>
          {`2) 강의 목록 페이지에서 해당 학과에 등록된 서버 목록을 확인합니다.`}
        </SubContent>
        <Image src={CreateServer2} />

        <SubContent>
          {`3) <서버 생성하기> 버튼을 클릭하여 서버 등록 페이지로 이동합니다.`}
        </SubContent>
        <Image src={CreateServer3} />

        <SubContent>
          {`4) 앞서 CLMS 서버 등록 패키지를 설치한 서버의 구성 정보를 입력한 뒤, <서버 등록> 버튼을 클릭하여 서버를 등록합니다.`}
        </SubContent>
        <Image src={CreateServer4} />
      </List>
    </Content>
  );
}

export default DocumentsCreateServer;

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
  margin-bottom: 10px;
  display: flex;
`;

const Image = styled.img`
  width: 1000px;
  margin-bottom: 80px;
`;

const CodeBox = styled.div`
  background-color: #f7f6f3;
  margin-left: 30px;
  margin-bottom: 40px;
  padding: 20px;
  font-size: 16px;
  width: 70%;
  min-width: 650px;
  border-radius: 5px;
  font-family: SFMono-Regular, Menlo, Consolas, 'PT-Mono', 'Liberation Mono', Courier;
`;