import styled from '@modern-js/runtime/styled';

const fontSize = '30px';

const Title = styled.div`
  font-size: ${fontSize};
  font-weight: bold;
  text-align: center;
`;

const Introduction = () => <Title>Introduction page</Title>;

export default Introduction;
