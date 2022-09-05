import createCache from '@emotion/cache';
import { theme } from 'theme';

import type { AppProps } from 'next/app';

import {
  CacheProvider,
  ThemeProvider,
} from '@shared/ui/components/theme/CacheProvider';
import GlobalStyles from '@shared/ui/components/theme/GlobalStyles';

const cache = createCache({ key: 'custom-class' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
