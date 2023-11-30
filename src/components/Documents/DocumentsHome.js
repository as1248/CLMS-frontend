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
        <Detail>
          <DetailTitle>
            1) 프론트엔드
          </DetailTitle>
          <div>프론트에서는 React.js 라이브러리를 기반으로 구현하였고, 사용자 계정 관리 페이지는 MUI(Material-UI) 라이브러리를 기반으로 UI를 작성하였다.</div>
          <div>react-cookie 라리브러리를 활용하여 쿠키를 통해 로그인 유지 여부를 관리한다.</div>
          <div>Recoil 라이브러리는 로그인 상태, 토큰의 상태를 관리하고, Axios 라이브러리를 통한 HTTP 요청의 비동기 처리는 작업의 동시성과 독립성을 보장한다.</div>
          <div>그리고 UI 디자인을 위해 추가적인 CSS 파일을 만들지 않고 자바스크립트 파일 내에서 CSS 작업을 수행할 수 있도록 styled-components 라이브러리를 적용하였다.</div>
          <div>React Router 라이브러리를 이용한 페이지 라우팅을 통해 클라이언트 사이드 렌더링을 구현하여 서버의 연산 부하를 줄였다.</div>
          <div>이로 인해 요청 응답 및 페이지 로딩 속도 개선될 것으로 판단된다.</div>
        </Detail>
        <Detail>
          <DetailTitle>
            2) 백엔드
          </DetailTitle>
          <div>백엔드에서는 크게 Spring 프레임워크와 데이터베이스를 이용하여 사용자 입력 정보를 처리 및 저장하고 출력하는 기능을 구현하였다.</div>
          <div>DB는 MySQL을 사용하였다. 학교 및 학과 정보, 학과 별로 등록된 사용자 계정과 서버 정보, 서버 별로 등록된 인스턴스 정보와 도메인 정보 등을 관계에 맞게 저장한다.</div>
          <div>Spring 프레임워크는 사용자로부터 정보를 입력받고 처리하기 위한 로직을 구현한다.</div>
          <div>명시된 API에 따라 사용자로부터 요청이나 데이터를 입력받으면, Java의 표준 ORM인 JPA(Java Persistence API)를 이용하여 DB에 데이터를 저장하거나 DB로부터 데이터를 가져와 가공하여 사용자에게 반환한다.</div>
          <div>또한 사용자 계정 정보에 대한 인증 및 인가를 처리하며, 각 기능에 대한 접근 보안을 담당한다.</div>
          <div>이렇게 구현된 기능들에는 회원 가입 및 로그인, 서버 설치 및 등록, 서버 관리, 인스턴스 등록, 상태 조회, 동작 관리 및 삭제, 접근 제한을 위한 인바운드 조건 수정 등이 있다.</div>
        </Detail>
        <Detail>
          <DetailTitle>3) 서버</DetailTitle>
          <div>서비스 어플리케이션이 동작할 CLMS 서버는 우분투 서버 상에 구현된다.</div>
          <div>CLMS 서버에서는 서비스를 제공할 서버 등록, 인스턴스 생성, 삭제 및 동작을 담당하는 원격 실행 쉘 스크립트 등의 기능이 존재한다.</div>
          <div>설치 파일을 이용해 설치한 각 서버에는 인스턴스 기능 수행을 위해 도커를 동작시키는 쉘 스크립트, Nginx를 활용해 특정 인스턴스에 도메인을 적용하는 기능 등이 구현되어 있다.</div>
        </Detail>
      </List>
    </Content>
  );
}

export default DocumentsHome;

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
  margin-left: 20px;
  margin-bottom: 30px;
  display: flex;

  div{
    div{
      line-height: 50px;
    }
  }
`;

const Image = styled.img`
  margin-left: 40px;
  height: 500px;
`;

const Detail = styled(SubContent)`
  display: block;
`;

const DetailTitle = styled.div`
  margin-bottom: 20px;
  margin-left: -10px;
  font-size: 24px;
  font-weight: 400;
`;