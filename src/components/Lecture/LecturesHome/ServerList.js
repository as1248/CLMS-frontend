import styled from "styled-components";
import { AiOutlineLaptop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { loadServers } from "../../../API/Lecture";

const ServerList = () => {
  const navigate = useNavigate();
  const [serverList,setServerList] = useState([]);
  const departmentId = localStorage.getItem('departmentId');

  const { isError, error, data } = useQuery('loadServers', ()=>loadServers(departmentId));

  useEffect(()=>{
    if(data){
      setServerList(data);
    }
  },[data]);
  
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {serverList?.map((item)=>{
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
  min-width: 650px;
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
  min-width: 180px;
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
  min-width: 160px;
  height: 60px;
  border-radius: 30px;
`;
