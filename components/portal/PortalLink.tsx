import { twJoin } from "tailwind-merge";
import type { PropsWithChildren } from "react";

export function PortalLink(props: PropsWithChildren<{
    bgClassName: string,
    iconClassName: string,
    href: string
}>) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noreferrer"
            className={twJoin(
                "mb-3 flex items-center rounded-md px-3 py-2 last:mb-0 hover:brightness-[0.85] active:brightness-[0.85]",
                props.bgClassName
            )}
        >
            <span className={twJoin(props.iconClassName, "mr-2")} />
            <span>{props.children}</span>
        </a>
    );
}
