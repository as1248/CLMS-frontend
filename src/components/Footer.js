import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { removeCookieToken } from "../routes/Cookie";

const Footer = () => {
    const userRole = localStorage.getItem('userRole');
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear();
        removeCookieToken();
        navigate('/login');
    }
    return (
        <FooterContent>
            <Logo src={process.env.PUBLIC_URL+'/CLMS_icon.png'} alt="CLMS 로고"/>
                <Content>
                    <Title>CLMS</Title>
                    <List>Email : donghyeon009@gmail.com</List>
                    <List>
                        <a href='https://github.com/DonghyeonKang/CLMS-backend' target="_blank" rel="noreferrer noopener" style={{color:'#b2bec3', textDecoration:'none'}}>Github : https://github.com/DonghyeonKang/CLMS-backend</a>
                    </List>
                    <List>
                        <a href='https://github.com/as1248/CLMS-frontend' target="_blank" rel="noreferrer noopener" style={{color:'#b2bec3', textDecoration:'none'}}>Github : https://github.com/as1248/CLMS-frontend</a>
                    </List>
                </Content>
                <Content>
                    <Title>Creators</Title>
                    <List>강동현</List>
                    <List>이건호</List>
                    <List>임채준</List>
                    <List>정수진</List>
                </Content>
                <Content>
                    {(userRole == null) ? (
                        <Login onClick={()=>navigate('/login')}>콘솔에 로그인</Login>
                    ) : (
                        <Login onClick={logOut}>로그아웃</Login>
                    )}
                    <Icons>
                      <Icon src={process.env.PUBLIC_URL + '/emailIcon.png'} alt="이메일"/>
                      <a href="https://github.com/DonghyeonKang/CLMS-backend" target="_blank" rel="noreferrer noopener">
                        <Icon src={process.env.PUBLIC_URL + '/githubIcon.png'} alt="깃허브"/>
                      </a>
                    </Icons>
                </Content>
        </FooterContent>
    );
}

export default Footer;

const FooterContent = styled.footer`
  position : relative;
  width: 100%;
  min-width: 900px;
  min-height: 250px;
  background-color: #232f3e;
  padding: 2%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: Malgun Gothic,sans-serif;
`;

const Logo = styled.img`
  height: 130px;
  margin-left: 20px;
  margin-right: 100px;
`;

const Content = styled.div`
  margin-right: 60px;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  color: white;
`;

const List = styled.div`
  color: #b2bec3;
`;

const Login = styled.div`
  cursor: pointer;
  padding: 6px 35px;
  height: 35px;
  background-color: #3eb5c4;
  text-align: center;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 5px;
  color: white;
  font-weight: 600;
  transition: all 0.4s;
  &:hover{
    background-color: #2da4b3;
  }
`;

const Icons = styled.div`
  cursor: pointer;
  margin-top: 10px;
  width: 200px;
`;

const Icon = styled.img`
  width: 50px;
`;