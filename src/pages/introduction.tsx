import getData from '@api/data';
import { useLoader } from '@modern-js/runtime';
import { NoSSR } from '@modern-js/runtime/ssr';
import styled from '@modern-js/runtime/styled';
import { useEffect, useState } from 'react';

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

  const [time, setTime] = useState(new Date().toString());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toString());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <Title>Introduction page {data?.title}</Title>
      <NoSSR>
        <div>Current time: {time}</div>
      </NoSSR>
    </div>
  );
};

export default Introduction;
