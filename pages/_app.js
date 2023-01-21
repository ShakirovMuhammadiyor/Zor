import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google';

import 'katex/dist/katex.min.css';


import useSWR from 'swr';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })
const clientSideEmotionCache = createEmotionCache();

export default function MyApp (props) {

  const { data, error, isLoading, mutate } = useSWR(`userdata`, async function () {
    // return await fetch('http://localhost:3000/api/getUserData', {
    //   credentials: 'include'
    // }).then(res => res.json())
    return {
      usertype: "student",
      name: "SARVARBEK"
    };
  }, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
          <style jsx global>{`
            .MuiTypography-root, button, input, a {
              font-family: ${inter.style.fontFamily} !important;
            }
            a {
              text-decoration: none;
            }
            a:link {
              color: inherit;
            }

            a.under:hover {
              text-decoration: underline;
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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};