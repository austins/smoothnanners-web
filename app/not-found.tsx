import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Error: 404"
};

export default function RootNotFound() {
    return (
        <>
            <h2 className="text-4xl font-bold">Error: 404</h2>

            <p>Page not found.</p>

            <div className="mt-4">
                <Link
                    href="/"
                    className={`
                        rounded-md border border-gray-600 bg-indigo-600 px-3 py-2
                        hover:bg-indigo-700
                        motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out
                    `}
                >
                    Back to Home
                </Link>
            </div>
        </>
    );
}
