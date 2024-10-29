import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Error: 404" };

export default function RootNotFound() {
    return (
        <>
            <div className="text-sky-300">
                <h2>Error: 404</h2>
                <p>The page you are looking for was not found.</p>
            </div>

            <div className="mt-5">
                <Link
                    href="/"
                    className="inline-block rounded-md bg-blue-600 px-3 py-2 hover:bg-blue-700 active:bg-blue-700"
                >
                    Back to Home
                </Link>
            </div>
        </>
    );
}
