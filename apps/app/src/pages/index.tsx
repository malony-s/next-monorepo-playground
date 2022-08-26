import type { NextPage } from 'next';

import { useEffect, useState } from 'react';

import FlexibleContainer from '@shared/ui/components/atoms/FlexibleContainer';

const Home: NextPage = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  return (
    <div>
      <button onClick={() => setA((prev) => !prev)}>A</button>
      <button onClick={() => setB((prev) => !prev)}>B</button>
      <FlexibleContainer
        css={{
          backgroundColor: 'red',
        }}
      >
        INDEX
      </FlexibleContainer>
      <Test test={a} test2={b} />
    </div>
  );
};

export default Home;

const Test = (props: any) => {
  useEffect(() => {
    console.info('changed...', props);
  }, [props]);
  return <div>1231</div>;
};
