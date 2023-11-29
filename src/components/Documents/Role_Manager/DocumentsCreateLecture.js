import styled from "styled-components";
import CreateLecture1 from '../../../img/Documents/CreateLecture/CreateLecture1.png';
import CreateLecture2 from '../../../img/Documents/CreateLecture/CreateLecture2.png';
import CreateLecture3 from '../../../img/Documents/CreateLecture/CreateLecture3.png';

const DocumentsCreateLecture = () => {
  return (
    <Content>
      <Title>강의 등록</Title>
      <List>
        <SubTitle>저희 CLMS에 강의를 등록할 수 있는 방법을 제공하는 문서입니다.</SubTitle>

        <SubContent>
          {`1) 로그인 후 헤더의 <강의 목록> 버튼을 클릭하여 페이지를 이동합니다.`}
        </SubContent>
        <Image src={CreateLecture1} />

        <SubContent>
          {`2) <강의 생성하기> 버튼을 클릭하여 강의 생성 페이지로 이동합니다.`}
        </SubContent>
        <Image src={CreateLecture2} />

        <SubContent>
          {`3) 강의를 생성하려는 서버를 선택하고 강의 정보를 기입한 뒤 <생성하기> 버튼을 클릭하여 강의를 생성합니다.`}
        </SubContent>
        <Image src={CreateLecture3} />
      </List>
    </Content>
  );
}

export default DocumentsCreateLecture;

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