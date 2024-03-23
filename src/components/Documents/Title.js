import styled from "styled-components";

const Title = ({children}) => {
  return <TitleComponent>{children}</TitleComponent>;
};

export default Title;

const TitleComponent = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
