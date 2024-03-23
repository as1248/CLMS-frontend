import styled from "styled-components";

const Tab = ({children, onClick}) => {
  return (
    <Item onClick={onClick}>{children}</Item>
  )
};

export default Tab;

const Item = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
  transition: all 0.4s;
  &:hover{
    background-color: #f2f4f7;
  }
`;