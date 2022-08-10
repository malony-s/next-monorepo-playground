import React, { useMemo } from 'react';

import Typography, {
  TypographyVariants,
} from '@shared/ui/components/atoms/Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

const Template = () => {
  const items = useMemo(
    (): Array<TypographyVariants> => [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'button',
      'caption',
      'overline',
    ],
    [],
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {items.map((variant) => (
          <div
            css={{
              borderBottomWidth: 1,
              borderBottomColor: '#ededed',
              borderBottomStyle: 'solid',
            }}
            key={variant}
          >
            <Typography variant={variant}>{variant}</Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export const Index = Template.bind({});
