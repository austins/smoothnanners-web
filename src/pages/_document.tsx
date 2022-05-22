import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Open+Sans:wght@300&display=optional"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}
