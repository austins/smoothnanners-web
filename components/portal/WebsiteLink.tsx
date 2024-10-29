import type { PropsWithChildren } from "react";
import { PortalLink } from "@/components/portal/PortalLink";

export function WebsiteLink(props: PropsWithChildren<{ href: string }>) {
    return (
        <PortalLink
            bgClassName="bg-indigo-600"
            iconClassName="i-ph-globe"
            href={props.href}
        >
            {props.children}
        </PortalLink>
    );
}
