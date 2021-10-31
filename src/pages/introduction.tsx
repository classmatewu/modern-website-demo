import getData from '@api/data';
import styled from '@modern-js/runtime/styled';
import { useEffect, useState } from 'react';

const fontSize = '30px';

const Title = styled.div`
  font-size: ${fontSize};
  font-weight: bold;
  text-align: center;
`;

const Introduction = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await getData();
      // const _data = await res.json();
      setData(res);
      // console.log('---res---', res);
    };

    load();
  }, []);

  return <Title>Introduction page {data?.title}</Title>;
};

export default Introduction;
