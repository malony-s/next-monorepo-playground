import { Global, Interpolation, Theme } from '@emotion/react';

const DefaultStyles = {
  body: {
    margin: 0,
    padding: 0,
    fontSize: 16,
    fontFamily: 'Noto Sans Kr',
  },
};

const GlobalStyles = ({ style }: { style?: Interpolation<Theme> }) => {
  const styles = Object.assign({}, DefaultStyles, style);
  return <Global styles={styles} />;
};

export default GlobalStyles;
