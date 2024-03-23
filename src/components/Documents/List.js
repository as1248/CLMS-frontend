import styled from "styled-components";

const List = ({children}) => {
  return <ListComponent>{children}</ListComponent>;
};

export default List;

const ListComponent = styled.div`
  margin-top: 50px;
`;