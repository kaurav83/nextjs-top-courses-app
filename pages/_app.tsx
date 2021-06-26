import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    ReactGA.initialize('UA-000000-01');

    router.events.on('routeChangeComplete', (url: string) => {
        // проверяем, что мы не на сервере
        if (typeof window !== 'undefined') {
            ReactGA.pageview(url);
        }
    });

    return (
        <>
            <Head>
                <title>My top project</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://www.google-analytics.com/" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
                <meta property="og:locale" content="ru_RU" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
