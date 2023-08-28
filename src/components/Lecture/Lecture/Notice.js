import styled from "styled-components";

const Notice = () => {
  return (
    <Section>
      <Title>공지사항</Title>
    </Section>
  );
};

export default Notice;

const Section = styled.section`
  width: 100%;
  padding: 3%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;
