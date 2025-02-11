import { twJoin } from "tailwind-merge";
import type { IconType } from "react-icons";

export function PortalLink(props: {
    variant: "red" | "purple" | "indigo" | "slate" | "sky" | "fuchsia";
    icon: ReturnType<IconType>;
    text: string;
    href: string;
}) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noreferrer"
            className={twJoin(
                "flex items-center gap-1.5 rounded-md border border-gray-600 px-3 py-2 motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out",
                props.variant === "red" && "bg-red-600 hover:bg-red-700",
                props.variant === "purple" && "bg-purple-600 hover:bg-purple-700",
                props.variant === "indigo" && "bg-indigo-500 hover:bg-indigo-600",
                props.variant === "slate" && "bg-slate-800 hover:bg-slate-900",
                props.variant === "sky" && "bg-sky-500 hover:bg-sky-600",
                props.variant === "fuchsia" && "bg-fuchsia-600 hover:bg-fuchsia-700"
            )}
        >
            {props.icon}
            {props.text}
        </a>
    );
}
