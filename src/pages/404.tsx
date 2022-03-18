import type { NextPage } from "next";
import { StatusCodes } from "http-status-codes";
import Error from "../components/Error";

const Custom404: NextPage = () => {
    return <Error statusCode={StatusCodes.NOT_FOUND} />;
};

export default Custom404;
