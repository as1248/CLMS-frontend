import styled from "styled-components";

const ServerList = () => {
    return(
        <List>
          <Grid>
            <Server>웹프 서버</Server>
          </Grid>
          <Grid>
            <Server>웹프 서버</Server>
          </Grid>
          <Grid>
            <Server>웹프 서버</Server>
          </Grid>
          <Grid>
            <Server>웹프 서버</Server>
          </Grid>
          <Grid>
            <CreateServerBtn>서버 생성하기 +</CreateServerBtn>
          </Grid>
        </List>
    );
};

export default ServerList;

const List = styled.div`
  margin: 2%;
  margin-left: 100px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

const Server = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100px;
  margin-bottom: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateServerBtn = styled(Server)`
  width: 60%;
  height: 60px;
  border-radius: 30px;
`;