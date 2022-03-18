import type { NextPage } from "next";
import Bio from "../components/Bio";
import Portal from "../components/Portal";

const Home: NextPage = () => {
    return (
        <>
            <Bio />

            <Portal />
        </>
    );
};

export default Home;
