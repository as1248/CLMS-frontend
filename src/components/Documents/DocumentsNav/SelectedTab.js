import styled from "styled-components";

const SelectedTab = ({children, onClick}) => {
  return (
    <SelectedItem onClick={onClick}>{children}</SelectedItem>
  )
};

export default SelectedTab;

const SelectedItem = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f2f4f7;
  border-radius: 5px;
  transition: all 0.4s;
`;