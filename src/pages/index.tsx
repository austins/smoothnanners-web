import HeadWithTitle from "@/components/HeadWithTitle";
import type { NextPage } from "next";
import Bio from "../components/Bio";
import Portal from "../components/Portal";

const Home: NextPage = () => {
    return (
        <>
            <HeadWithTitle description="SmoothNanners is a gamer, musician, software developer, and photographer." />

            <Bio />

            <Portal />
        </>
    );
};

export default Home;
