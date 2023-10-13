import styled from "styled-components";
import { AiOutlineLaptop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const ServerList = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    try{
      axios.get('/servers/management/list?departmentId=1').then((response)=>console.log(response));
    } catch (error) {
      console.error(error);
    };
  },[]);
  
  return (
    <List>
      <Grid>
        <Server>
          <div>
            <Title>웹프 서버</Title>
            <IPAddress>203.233.22.1</IPAddress>
          </div>
          <AiOutlineLaptop size={56} />
        </Server>
      </Grid>
      <Grid>
        <Server>
          <div>
            <Title>웹프 서버</Title>
            <IPAddress>203.233.22.1</IPAddress>
          </div>
          <AiOutlineLaptop size={56} />
        </Server>
      </Grid>
      <Grid>
        <Server>
          <div>
            <Title>웹프 서버</Title>
            <IPAddress>203.233.22.1</IPAddress>
          </div>
          <AiOutlineLaptop size={56} />
        </Server>
      </Grid>
      <Grid>
        <Server>
          <div>
            <Title>웹프 서버</Title>
            <IPAddress>203.233.22.1</IPAddress>
          </div>
          <AiOutlineLaptop size={56} />
        </Server>
      </Grid>
      <Grid>
        <CreateServerBtn onClick={()=>navigate('/createServer')}>서버 생성하기 +</CreateServerBtn>
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
  width: 80%;
  height: 100px;
  margin-bottom: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  font-size: 20px;
`;

const IPAddress = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const CreateServerBtn = styled(Server)`
  cursor: pointer;
  width: 60%;
  height: 60px;
  border-radius: 30px;
`;
