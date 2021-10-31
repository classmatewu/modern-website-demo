import getData from '@api/data';
import { useLoader } from '@modern-js/runtime';
import styled from '@modern-js/runtime/styled';

const fontSize = '30px';

const Title = styled.div`
  font-size: ${fontSize};
  font-weight: bold;
  text-align: center;
`;

const Introduction = () => {
  const { data } = useLoader(async () => {
    const res = await getData();
    return res;
  });
  // console.log('---data---', data);

  return <Title>Introduction page {data?.title}</Title>;
};

export default Introduction;
