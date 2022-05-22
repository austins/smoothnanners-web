import type { NextPage } from "next";
import HeadWithTitle from "@/components/HeadWithTitle";

const Custom404: NextPage = () => {
    const title = "Page Not Found";

    return (
        <>
            <HeadWithTitle title={title} noIndex />

            <div className="text-white-50">
                <h1>{title}</h1>

                <div>This page could not be found.</div>
            </div>
        </>
    );
};

export default Custom404;
