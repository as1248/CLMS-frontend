import styled from "styled-components";
import CLMS from "../../img/Documents/CLMS.png"

const DocumentsHome = () => {
  return (
    <Content>
      <Title>About CLMS</Title>
      <List>
        <SubTitle>1. CLMS란 어떤 서비스인가?</SubTitle>
        <SubContent>
          CLMS(학습 관리 클라우드 컴퓨팅 시스템)는 Cloud와 Learning Management System을 합친 합성어로, 클라우드 시스템 및 가상화 기술을 이용하여 하나의 물리적 서버 자원을 다중 사용자에게 할당함으로써 교수자 및 학습자의 SW 개발 환경 구축과 접근을 용이하게 하는 클라우드 컴퓨팅 서비스이다.
        </SubContent>
      </List>
      <List>
        <SubTitle>2. 왜 CLMS를 만들었는가?</SubTitle>
        <SubContent>
          프로젝트 수업 진행 과정에서 학습자들은 개발 환경을 마련하는 데 부담을 느끼고, 교수자는 이에 대한 지원이 쉽지 않은 경우가 많았다. 
          이에 기존의 클라우드 컴퓨팅 서비스와 학습 관리 시스템을 결합하여 쉽고 원활하게 교수자가 교육 환경을 마련하고 학습자는 개발 환경을 구축할 수 있도록 지원하고자 본 시스템을 개발하였다.
        </SubContent>
      </List>
      <List>
        <SubTitle>3. CLMS는 어떻게 만들었는가?</SubTitle>
        <SubContent>
          <div>
            <div>CLMS 서버는 오른쪽 그림에 제시된 바와 같이 React.js, Spring, Mysql로 구성되어 있다.</div>
            <div>CLMS 홈페이지에서 학습자와 교수자의 요청을 받아 교수자의 서버로 전달한다.</div>
            <div>교수자는 CLMS 홈페이지를 통하여 CLMS에 서버를 등록할 수 있다.</div>
            <div>서버를 등록한 뒤, CLMS에서 제공한 설치 파일을 통해 교수자의 서버를 자동으로 환경 설정한다.</div>
            <div>교수자는 해당 서버로 자신의 학습자들이 가상 환경을 생성하여 사용할 수 있도록 한다.</div>
            <div>NginX를 이용한 리버스 프록시를 통해 각 가상 환경별 도메인 서비스를 적용할 수 있도록 한다.</div>
            <div>학습자는 교수자가 제공한 서버에 자신이 생성한 가상 서버를 SSH를 통해 접속할 수 있다.</div>
            <div>가상 서버의 운영체제는 CentOS, Ubuntu 중 하나를 선택할 수 있다.</div>
            <div>제 3자는 교수자가 제공한 환경에서 학습자가 만든 서비스를 이용하는 사람을 의미하며, 학습자가 DNS를 이용하여 배포한 서비스를 이용할 수 있다.</div>
          </div>
          <Image src={CLMS} alt="CLMS 구조"/>
        </SubContent>
      </List>
    </Content>
  );
}

export default DocumentsHome;

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

const SubContent = styled.div`
  width: 90%;
  font-size: 18px;
  margin-left: 20px;
  display: flex;

  div{
    div{
      line-height: 50px;
    }
  }
`;

const Image = styled.img`
  margin-left: 30px;
  width: 400px;
`;