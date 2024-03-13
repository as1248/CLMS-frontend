import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import ServerTabs from "../../components/Server/ServerResources/ServerTabs";
import ServerResource from "../../components/Server/ServerResources/ServerResource";
import axios from "axios";

//현재 사용 안함
const ServerResources = () => {
    const departmentId = localStorage.getItem('departmentId');
    const [data, setData] = useState([]);
    const [serverList,setServerList] = useState([]);
    const [server,setServer] = useState('');
    const [studentList,setStudentList] = useState([]);
    const [serverId,setServerId] = useState('');
    
    useEffect(()=>{
        try {
            axios.get(`/servers/management/list?departmentId=${departmentId}`).then((response)=> setData(response.data.servers));
          } catch (error) {
            console.error(error);
          }
      },[]);

    useEffect(()=>{
        setServer(data[0]?.name);
        data?.map((i)=> setServerList((prev) => [...prev, i?.name]));
    },[data]);

    useEffect(()=>{
        const switchServer = data?.filter((i)=>i?.name===server);
        setServerId(switchServer[0]?.serverId);
        if(switchServer[0]?.serverId !== undefined){
            try {
                axios.get(`/user/student/list`).then((response)=> setStudentList(response.data.students));
            } catch (error) {
                console.error(error);
            }  
        }
    },[data,server]);
    return (
        <>
            <Header/>
            <Content>
                <ServerTabs serverList={serverList} server={server} setServer={setServer}/>
                <ServerResource server={server} studentList={studentList} serverId={serverId}/>
            </Content>
        </>
    );
};

export default ServerResources;

const Content = styled.div`
    padding-left: 5%;
    padding-top: 50px;
    width: 95%;
    min-height: 80vh;
    margin-bottom: 120px;
`;