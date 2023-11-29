import styled from "styled-components";
import CreateInstance1 from '../../../img/Documents/CreateInstance/CreateInstance1.png';
import CreateInstance2 from '../../../img/Documents/CreateInstance/CreateInstance2.png';
import CreateInstance3 from '../../../img/Documents/CreateInstance/CreateInstance3.png';
import CreateInstance4 from '../../../img/Documents/CreateInstance/CreateInstance4.png';
import CreateInstance5 from '../../../img/Documents/CreateInstance/CreateInstance5.png';
import CreateInstance6 from '../../../img/Documents/CreateInstance/CreateInstance6.png';
import CreateInstance7 from '../../../img/Documents/CreateInstance/CreateInstance7.png';

const DocumentsCreateInstance = () => {
  return (
    <Content>
      <Title>인스턴스 생성</Title>
      <List>
        <SubTitle>저희 CLMS에서 인스턴스를 생성하는 방법을 제공하는 문서입니다.</SubTitle>

        <SubContent>
          {`1) 로그인 후 헤더에서 <강의 목록> 버튼을 클릭하여 강의 목록 페이지로 이동합니다.`}
        </SubContent>
        <Image src={CreateInstance1}/>

        <SubContent>
          {`2) <과목 홈 바로가기> 버튼을 클릭하여 인스턴스를 생성하려는 강의의 홈으로 이동합니다.`}
        </SubContent>
        <Image src={CreateInstance2}/>

        <SubContent>
          {`3) <인스턴스> 버튼을 클릭하여 현재 강의의 인스턴스 정보 페이지로 이동합니다.`}
        </SubContent>
        <Image src={CreateInstance3}/>

        <SubContent>
          {`4) 현재 강의에서 인스턴스가 존재하지 않는 경우, <인스턴스 생성> 버튼을 클릭하여 인스턴스 생성 페이지로 이동합니다.`}
        </SubContent>
        <Image src={CreateInstance4}/>

        <SubContent>
          {`5) <새 키 페어 생성> 버튼을 클릭하여 키-페어 모달창을 띄웁니다.`}
        </SubContent>
        <Image src={CreateInstance5}/>

        <SubContent>
          {`6) 키-페어 생성 폼을 기입 후 키-페어 생성 버튼을 클릭하면 입력한 이름과 파일 형식에 맞게 키-페어가 생성되고 설정에 적용됩니다. 
          생성한 인스턴스 접속을 위한 개인키(private key)는 로컬 장치로 다운로드 되며, 해당 키 파일을 원하는 위치로 이동하여 저장합니다.`}
        </SubContent>
        <SubContent>
          {`(경고 : 해당 개인키를 분실하거나 여러 장치에서 사용하는 경우 인스턴스 접속이 차단되므로 분실 및 유출되지 않도록 주의하십시오.)`}
        </SubContent>
        <Image src={CreateInstance6}/>

        <SubContent>
          {`7) 인스턴스 생성 폼에 따라 정보를 기입한 후 <인스턴스 생성> 버튼을 클릭하면 인스턴스가 생성이 완료됩니다.`}
        </SubContent>
        <Image src={CreateInstance7}/>
      </List>
    </Content>
  );
}

export default DocumentsCreateInstance;

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
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const Image = styled.img`
  width: 1000px;
  margin-bottom: 80px;
`;