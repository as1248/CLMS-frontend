import styled from "styled-components";
import Header from "../../components/Header";
import EditInboundRules from "../../components/Instance/InboundRules/EditInboundRules";

const InboundRules = () => {
  
  return (
    <>
      <Header/>
      <Content>
        <EditInboundRules/>
      </Content>
    </>
  );
};
export default InboundRules;

const Content = styled.div`
  padding: 0 5%;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 120px;
`;