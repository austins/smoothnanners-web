import Link from "next/link";
import { type ComponentProps, type PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

const classNames = "rounded-md bg-blue-600 px-3 py-2 hover:bg-blue-700 active:bg-blue-700";

export function Button<T>({ as, children, ...props }: PropsWithChildren<
    { as?: T extends "a" | "button" ? T : never }
    & (T extends "a"
        ? ComponentProps<typeof Link>
        : ComponentProps<"button">)
>) {
    if (as === "a") {
        return <Link className={twJoin(classNames, "inline-block")} {...props as ComponentProps<typeof Link>}>{children}</Link>;
    }

    return <button className={classNames} {...props as ComponentProps<"button">}>{children}</button>;
}
