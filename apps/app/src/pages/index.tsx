/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';

import FlexibleContainer from '@shared/ui/components/atoms/FlexibleContainer';

const Home: NextPage = () => {
  return (
    <div>
      <FlexibleContainer
        css={{
          backgroundColor: 'red',
        }}
      >
        INDEX
      </FlexibleContainer>
    </div>
  );
};

export default Home;
