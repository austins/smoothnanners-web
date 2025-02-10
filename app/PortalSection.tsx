import type { PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";
import type { IconType } from "react-icons";

export function PortalSection(
    props: PropsWithChildren<{
        variant: "indigo" | "pink" | "cyan" | "blue";
        headingText: string;
        headingIcon: ReturnType<IconType>;
    }>
) {
    return (
        <section
            className={twJoin(
                "border-3 rounded-md",
                props.variant === "indigo" && "border-indigo-500",
                props.variant === "pink" && "border-pink-500",
                props.variant === "cyan" && "border-cyan-400",
                props.variant === "blue" && "border-blue-400"
            )}
        >
            <header className="border-b-2 border-b-gray-500 px-3 py-2">
                <h2 className="flex items-center gap-1.5 text-3xl">
                    {props.headingIcon}
                    {props.headingText}
                </h2>
            </header>

            <div className="flex flex-col gap-2 p-3">{props.children}</div>
        </section>
    );
}
