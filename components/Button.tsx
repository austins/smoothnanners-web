"use client";

import Link, { type LinkProps } from "next/link";
import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

const classNames = "rounded-md bg-blue-600 px-3 py-2 hover:bg-blue-700 active:bg-blue-700";

export function Button(
    props: PropsWithChildren<
        | ({ as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
        | ({ as: "a" } & LinkProps)>
) {
    const { as, children, ...restProps } = props;

    if (as === "a") {
        return <Link className={twJoin(classNames, "inline-block")} {...restProps as LinkProps}>{children}</Link>;
    }

    return <button className={classNames} {...restProps as ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>;
}
