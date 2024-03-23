import styled from "styled-components";

const SubTitle = ({children}) => {
  return <SubTitleComponent>{children}</SubTitleComponent>;
};

export default SubTitle;

const SubTitleComponent = styled.div`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 400;
`;