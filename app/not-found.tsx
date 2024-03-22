import { Button } from "@/components/Button";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Error: 404",
    robots: "noindex"
};

export default function RootNotFound() {
    return (
        <>
            <div className="text-sky-300">
                <h2>Error: 404</h2>

                <p>Page not found.</p>
            </div>

            <div className="mt-4">
                <Button as="a" href="/">Go to Home</Button>
            </div>
        </>
    );
}
