import Head from 'next/head';

function Meta() {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            {/* // TODO: add favicon */}
            <link
                rel="shortcut icon"
                href="/static/favicon.ico"
                type="image/x-icon"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/static/nprogress.css"
            />
            <title>My Next App</title>
            {/* fonts management */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com/"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
                rel="stylesheet"
            ></link>
        </Head>
    );
}

export default Meta;
