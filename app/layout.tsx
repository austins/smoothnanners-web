import { type PropsWithChildren } from "react";
import "./globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | SmoothNanners",
        default: "SmoothNanners"
    },
    description: "SmoothNanners is a gamer, musician, software developer, and photographer."
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className="bg-[#102a66] bg-gradient-to-b from-[#130d4d] to-[#102a66] bg-no-repeat font-roundsans">
                <div className="flex min-h-screen items-center text-xl leading-snug text-white drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] sm:text-2xl">
                    <main className="container py-4">
                        <h1 className="font-handwritten">SmoothNanners</h1>

                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
