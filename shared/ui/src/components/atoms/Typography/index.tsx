import isPropValid from '@emotion/is-prop-valid';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { PropsWithChildren } from 'react';

type TypographyPrefix = 'h' | 'subtitle' | 'body';
type TypographyNumric = '1' | '2' | '3' | '4' | '5' | '6';
type TypographyTemplates = Exclude<
  `${TypographyPrefix}${TypographyNumric}`,
  `${Exclude<TypographyPrefix, 'h'>}${Exclude<TypographyNumric, '1' | '2'>}`
>;

export type TypographyVariants =
  | TypographyTemplates
  | 'button'
  | 'caption'
  | 'overline';

type Head = `h${TypographyNumric}`;
/**
 thin - 100
 extralight - 200
 light - 300
 normal(regular) - 400
 medium - 500
 semebold - 600
 bold - 700
 extrabold - 800
 black - 900
 */
type NumberFontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 500
  | 600
  | 700
  | 800
  | 900;
type FontWeight = `${NumberFontWeight}` | NumberFontWeight;
type FontAs = Head | 'p' | 'span' | 'label';
type TypographyStyleInfo = {
  [x in TypographyVariants]: [number, FontWeight, FontAs, number];
};

const TYPOGRAPHY_STYLE_INFO: TypographyStyleInfo = {
  h1: [6, 300, 'h1', -1.5],
  h2: [3.75, 300, 'h2', -0.5],
  h3: [3, 400, 'h3', 0],
  h4: [2.125, 400, 'h4', 0.25],
  h5: [1.5, 400, 'h5', 0],
  h6: [1.25, 500, 'h6', 0.15],
  subtitle1: [1, 400, 'h6', 0.15],
  subtitle2: [0.875, 500, 'h6', 0.1],
  body1: [1, 400, 'p', 0.5],
  body2: [0.875, 400, 'p', 0.25],
  button: [0.875, 500, 'span', 1.25],
  caption: [0.75, 400, 'span', 0.4],
  overline: [0.625, 400, 'span', 1.5],
};

export type TypographyProps = {
  variant?: TypographyVariants;
  css?: SerializedStyles;
};

const Typogrpahy = ({
  variant = 'body1',
  ...others
}: PropsWithChildren<TypographyProps>) => {
  const [fontSize, fontWeight, as, letterSpacing] =
    TYPOGRAPHY_STYLE_INFO[variant];
  return (
    <BaseTypography
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      button={variant === 'button'}
      as={as}
      {...others}
    />
  );
};

export default Typogrpahy;

type BaseTypogrpahyProp = {
  fontSize: number;
  fontWeight: FontWeight;
  letterSpacing: number;
  button?: boolean;
};
// const FONT_SIZE_UNIT = 'em';
const BaseTypography = styled('p', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<BaseTypogrpahyProp>(
  ({ fontSize, fontWeight, letterSpacing, button = false }) => ({
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, Noto Sans Kr',
    fontSize: `${fontSize}em`,
    fontWeight,
    letterSpacing,
    textTransform: button ? 'uppercase' : 'inherit',
  }),
);
