import { type PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

export function PortalLink({
    iconClassName,
    href,
    color,
    children
}: PropsWithChildren<{
    iconClassName: string;
    href: string;
    color: "rose" | "purple" | "sky" | "dark";
}>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={twJoin(
                "mb-3 flex items-center rounded-md px-3 py-2 last:mb-0 hover:brightness-[0.85] active:brightness-[0.85]",
                color === "rose" && "bg-rose-500",
                color === "purple" && "bg-purple-500",
                color === "sky" && "bg-sky-500",
                color === "dark" && "bg-indigo-700"
            )}
        >
            <span className={twJoin(iconClassName, "mr-2")} />
            <span>{children}</span>
        </a>
    );
}
