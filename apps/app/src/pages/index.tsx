import type { NextPage } from 'next';

import { useMemo } from 'react';

import FlexibleContainer from '@shared/ui/components/atoms/FlexibleContainer';
import Typography, {
  TypographyVariants,
} from '@shared/ui/components/atoms/Typography';

const Home: NextPage = () => {
  const typographies = useMemo(
    (): Array<{ variant: TypographyVariants; label: string }> => [
      { variant: 'h1', label: 'h1 text' },
      { variant: 'h2', label: 'h2 text' },
      { variant: 'h3', label: 'h3 text' },
      { variant: 'h4', label: 'h4 text' },
      { variant: 'h5', label: 'h5 text' },
      { variant: 'h6', label: 'h6 text' },
      { variant: 'subtitle1', label: 'subtitle1 text' },
      { variant: 'subtitle2', label: 'subtitle2 text' },
      { variant: 'body1', label: 'body1 text' },
      { variant: 'body2', label: 'body2 text' },
      { variant: 'overline', label: 'overline text' },
      { variant: 'caption', label: 'caption text' },
    ],
    [],
  );
  return (
    <div>
      <FlexibleContainer divider={<hr css={{ width: '100%' }} />}>
        {typographies.map(({ variant, label }) => (
          <Typography variant={variant} key={variant}>
            {label}
          </Typography>
        ))}
      </FlexibleContainer>
    </div>
  );
};

export default Home;
