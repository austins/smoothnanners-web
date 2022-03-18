import "../styles/ClientApp.scss";
import type { AppProps } from "next/app";
import { Container } from "react-bootstrap";
import HeadWithTitle from "../components/HeadWithTitle";
import Header from "../components/Header";

function ClientApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeadWithTitle description="SmoothNanners is a gamer, musician, software developer, and photographer." />

            <Container id="main" className="d-flex align-items-center py-3">
                <div className="w-100">
                    <Header />

                    <main>
                        <Component {...pageProps} />
                    </main>
                </div>
            </Container>
        </>
    );
}

export default ClientApp;
