import { component$, Slot } from "@builder.io/qwik";

export const PortalLink = component$(
    (props: {
        variant: "black" | "fuchsia" | "indigo" | "purple" | "red" | "sky" | "slate";
        href: string;
        iconClass: string;
    }) => {
        return (
            <a
                href={props.href}
                target="_blank"
                rel="external noreferrer"
                class={[
                    props.variant === "black" && "bg-black hover:bg-gray-900 hover:shadow-gray-900",
                    props.variant === "fuchsia" && "bg-fuchsia-600 hover:bg-fuchsia-700 hover:shadow-fuchsia-700",
                    props.variant === "indigo" && "bg-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-600",
                    props.variant === "purple" && "bg-purple-600 hover:bg-purple-700 hover:shadow-purple-700",
                    props.variant === "red" && "bg-red-600 hover:bg-red-700 hover:shadow-red-700",
                    props.variant === "sky" && "bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700",
                    props.variant === "slate" && "bg-slate-800 hover:bg-slate-900 hover:shadow-slate-900",
                    `
                        flex items-center gap-1.5 rounded-md border border-gray-600 px-3 py-2
                        hover:-translate-y-0.5 hover:scale-101 hover:shadow-sm/30
                        motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
                    `
                ]}
            >
                <span class={props.iconClass} aria-hidden="true" />
                <Slot />
            </a>
        );
    }
);

export const WebsiteLink = component$((props: { href: string }) => {
    return (
        <PortalLink href={props.href} variant="slate" iconClass="icon-[tabler--link]">
            <Slot />
        </PortalLink>
    );
});

export const YouTubeLink = component$((props: { channelId: string }) => {
    return (
        <PortalLink
            href={`https://www.youtube.com/channel/${props.channelId}`}
            variant="red"
            iconClass="icon-[tabler--brand-youtube-filled]"
        >
            YouTube
        </PortalLink>
    );
});
