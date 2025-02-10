import "./app.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: { template: "%s | SmoothNanners", default: "SmoothNanners" },
    description: "SmoothNanners is a gamer, musician, software developer, and photographer."
};

export default function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en">
            <body className="font-rounded-sans flex min-h-screen items-center bg-blue-950 bg-gradient-to-b from-blue-950 to-blue-800 text-2xl text-white">
                <div className="container py-4">
                    <header className="pb-3">
                        <h1 className="font-handwritten text-4xl font-bold">SmoothNanners</h1>
                    </header>

                    <main>{props.children}</main>
                </div>
            </body>
        </html>
    );
}
