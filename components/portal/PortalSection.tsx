import { twJoin } from "tailwind-merge";
import type { PropsWithChildren } from "react";

export function PortalSection(props: PropsWithChildren<{
    iconClassName: string,
    headingText: string,
    color: "fuchsia" | "indigo" | "purple" | "sky"
}>) {
    return (
        <section
            className={twJoin(
                "mb-4 rounded-md border-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] last:mb-0",
                props.color === "fuchsia" && "border-fuchsia-600",
                props.color === "indigo" && "border-indigo-500",
                props.color === "purple" && "border-purple-600",
                props.color === "sky" && "border-sky-500"
            )}
        >
            <h2 className="mb-0 flex items-center border-b-2 border-b-slate-600 px-3 py-2">
                <span className={twJoin(props.iconClassName, "mr-2")} />
                <span>{props.headingText}</span>
            </h2>

            <div className="p-3">
                {props.children}
            </div>
        </section>
    );
}
