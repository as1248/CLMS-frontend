import styled from "styled-components";

const Content = ({children}) => {
  return <ContentComponent>{children}</ContentComponent>;
};

export default Content;

const ContentComponent = styled.div`
  width: 100%;
  min-width: 700px;
  padding: 20px 40px;
  background-color: white;
`;