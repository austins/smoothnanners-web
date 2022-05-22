import "../styles/App.scss";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import type { AppType } from "next/dist/shared/lib/utils";

const App: AppType = ({ Component, pageProps }) => {
    return (
        <>
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
};

export default App;
