import { type PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

export function PortalSection({
    iconClassName,
    headingText,
    color,
    children
}: PropsWithChildren<{
    iconClassName: string;
    headingText: string;
    color: "fuchsia" | "purple" | "sky" | "dark";
}>) {
    return (
        <section
            className={twJoin(
                "mb-4 rounded-md border-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] last:mb-0",
                color === "fuchsia" && "border-fuchsia-600",
                color === "purple" && "border-purple-600",
                color === "sky" && "border-sky-500",
                color === "dark" && "border-indigo-500"
            )}
        >
            <h2 className="mb-0 flex items-center border-b-2 border-b-slate-600 px-3 py-2">
                <span className={twJoin(iconClassName, "mr-2")} />
                <span>{headingText}</span>
            </h2>

            <div className="p-3">
                {children}
            </div>
        </section>
    );
}
