import styled from "styled-components";
import Header from "../../components/Header";

const ManageStudents = () => {
    return (<>
        <Header/>
        <ServerName>서버 이름</ServerName>
        <div>
            <NavBar>
                <div>Nav 목록</div>
            </NavBar>
            <Content>
                <div>내용</div>
            </Content>
        </div>

    </>);
}

export default ManageStudents;

const ServerName = styled.div`
    margin: 30px 0;
    margin-left: 20px;
`;

const NavBar = styled.div`
    float: left;
    width: 10%;
    border: 1px solid black;
    margin-left: 20px;
    padding: 2%;
`;

const Content = styled.div`
    float: right;
    border: 1px solid black;
    width: 75%;
    margin-right: 20px;
    padding: 2%;
    height: 60vh;
`;