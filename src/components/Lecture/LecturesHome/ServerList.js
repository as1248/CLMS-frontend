import styled from "styled-components";
import { AiOutlineLaptop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ServerList = () => {
  const navigate = useNavigate();
  const [list,setList] = useState([]);
  const departmentId = localStorage.getItem('departmentId');

  useEffect(()=>{
    try{
      axios.get(`/servers/management/list?departmentId=${departmentId}`).then((response)=>setList(response.data.servers));
    } catch (error) {
      console.error(error);
    };
  },[]);
  
  return (
    <List>
      {list?.map((item)=>{
        return(
          <Grid key={item?.ipv4}>
            <Server>
              <div>
                <Title>{item?.name}</Title>
                <IPAddress>{item?.ipv4}</IPAddress>
              </div>
              <AiOutlineLaptop size={56} />
            </Server>
          </Grid>
        )
      })}
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
