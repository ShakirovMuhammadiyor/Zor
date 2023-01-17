import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import useSWR from 'swr';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout || ((page) => page)

  const { data, error, isLoading, mutate } = useSWR(`userdata`, async function () {
    return await fetch('http://localhost:4000/courses/getUserData', {
      credentials: 'include'
    }).then(res => res.json())
  });

  if (data) {
    console.log(data);
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
          <style jsx global>{`
            .MuiTypography-root, button, input {
              font-family: ${inter.style.fontFamily} !important;
            }
            a {
              text-decoration: none;
            }
            a:link {
              color: inherit;
            }

            a.under:hover * {
              text-decoration: underline;
            }

            a:hover * {
              cursor: pointer;
            }
          `}</style>
          {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};