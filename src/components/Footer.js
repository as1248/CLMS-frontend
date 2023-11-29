import styled from "styled-components";
import logo from '../img/Logo.png'
import { useNavigate } from "react-router-dom";
import emailIcon from "../img/emailIcon.png"
import githubIcon from "../img/githubIcon.png"
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
            <Logo src={logo}/>
                <Content>
                    <Title>CLMS</Title>
                    <List>Email : donghyeon009@gmail.com</List>
                    <List>
                        <a href='https://github.com/DonghyeonKang/CLMS-backend' target="_blank" style={{color:'#b2bec3', textDecoration:'none'}}>Github : https://github.com/DonghyeonKang/CLMS-backend</a>
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
                      <Icon src={emailIcon} />
                      <Icon src={githubIcon} />
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
  height: 250px;
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
  color: white;
  font-weight: 600;
  &:hover{
    background-color: #2da4b3;
  }
`;

const Icons = styled.div`
  margin-top: 10px;
  width: 200px;
`;

const Icon = styled.img`
  width: 50px;
`;