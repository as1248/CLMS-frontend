import styled from "styled-components";
import Enrolment1 from '../../../img/Documents/Enrolment/Enrolment1.png';
import Enrolment2 from '../../../img/Documents/Enrolment/Enrolment2.png';
import Enrolment3 from '../../../img/Documents/Enrolment/Enrolment3.png';

const DocumentsEnrolment = () => {
  return (
    <Content>
      <Title>수강 신청</Title>
      <List>
        <SubTitle>저희 CLMS에서 수강 신청을 하는 방법을 제공하는 문서입니다. </SubTitle>

        <SubContent>
          {`1) 로그인 이후 메인 페이지 상단의 <강의 목록> 버튼을 클릭하여 강의 목록 페이지로 이동합니다.`}
        </SubContent>
        <Image src={Enrolment1} />

        <SubContent>
          {`2) 수강중인 강의 목록 아래의 <수강 신청하기> 버튼을 클릭합니다.`}
        </SubContent>
        <Image src={Enrolment2} />

        <SubContent>
          {`3) 사용자의 학과에 등록되어 있는 강의 목록에서 원하는 강의의 <신청하기> 버튼을 클릭하면 신청이 완료됩니다.
          (이후 교수자의 승인이 이루어지면 수강중인 강의 목록에 해당 강의가 추가됩니다.)`}
        </SubContent>
        <Image src={Enrolment3} />
      </List>
    </Content>
  );
}

export default DocumentsEnrolment;

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