import styled from "styled-components";
import DH from '../../../img/Documents/Contributors/DH.jpeg'
import GH from '../../../img/Documents/Contributors/GH.jpg'
import SJ from '../../../img/Documents/Contributors/SJ.png'
import CJ from '../../../img/Documents/Contributors/CJ.jpg'

const DocumentsContributors = () => {
  return (
    <Content>
      <Title>개발진, 도움을 준 사람들</Title>
      <List>
        <SubTitle>개발진</SubTitle>

        <Name>강동현</Name>
        <SubContent>
          <Image src={DH} />
          <div>
            <Detail>한마디 : 장인 정신을 향한 다음 단계에 집중하는 개발자 지망생</Detail>
            <Detail>학적 : 경상국립대학교 컴퓨터과학과</Detail>
            <Detail>GitHub 링크 : <a href="https://github.com/DonghyeonKang" target="_blank" rel="noreferrer noopener">https://github.com/DonghyeonKang</a></Detail>
            <Detail>블로그 링크 : <a href="https://velog.io/@dongkan9" target="_blank" rel="noreferrer noopener">https://velog.io/@dongkan9</a></Detail>
            <Detail>이메일 : donghyeon09@naver.com</Detail>
          </div>
        </SubContent>

        <Name>이건호</Name>
        <SubContent>
          <Image src={GH} />
          <div>
            <Detail>한마디 : 늦은 만큼 천천히, 한 걸음 한 걸음 나아가는 개발자 생활</Detail>
            <Detail>학적 : 경상국립대학교 컴퓨터과학과</Detail>
            <Detail>GitHub 링크 : <a href="https://github.com/GHL0714" target="_blank" rel="noreferrer noopener">https://github.com/GHL0714</a></Detail>
            <Detail>블로그 링크 : X</Detail>
            <Detail>이메일 : opkiopki@naver.com</Detail>
          </div>
        </SubContent>

        <Name>정수진</Name>
        <SubContent>
          <Image src={SJ} />
          <div>
            <Detail>한마디 : return 0부터 시작하는 개발자 생활</Detail>
            <Detail>학적 : 경상국립대학교 컴퓨터과학과</Detail>
            <Detail>GitHub 링크 : <a href="https://github.com/truemanburbank" target="_blank" rel="noreferrer noopener">https://github.com/truemanburbank</a></Detail>
            <Detail>블로그 링크 : <a href="https://hmmterestinguri.tistory.com/" target="_blank" rel="noreferrer noopener">https://hmmterestinguri.tistory.com/</a></Detail>
            <Detail>이메일 : juxtap.se@gmail.com</Detail>
          </div>
        </SubContent>

        <Name>임채준</Name>
        <SubContent>
          <Image src={CJ} />
          <div>
            <Detail>한마디 : 열심히 그리고 잘</Detail>
            <Detail>학적 : 경상국립대학교 컴퓨터과학과</Detail>
            <Detail>GitHub 링크 : <a href="https://github.com/as1248" target="_blank" rel="noreferrer noopener">https://github.com/as1248</a></Detail>
            <Detail>블로그 링크 : X</Detail>
            <Detail>이메일 : jun76248@gmail.com</Detail>
          </div>
        </SubContent>
      </List>

      <List>
        <SubTitle>도움을 준 사람들</SubTitle>
        <Name>장우혁</Name>
      </List>
    </Content>
  );
}

export default DocumentsContributors;

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
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const Name = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const Image = styled.img`
  height: 200px;
  margin-right: 30px;
  margin-bottom: 80px;
`;

const Detail = styled.div`
  margin-bottom: 10px;
`;