import { PortalLink } from "@/components/portal/PortalLink";

export function YouTubeLink(props: { slug: string }) {
    return (
        <PortalLink
            iconClassName="i-ph-youtube-logo-fill"
            href={`https://www.youtube.com/channel/${props.slug}`}
            bgClassName="bg-rose-600"
        >
            YouTube
        </PortalLink>
    );
}
