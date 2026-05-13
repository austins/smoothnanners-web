import { component$ } from "@builder.io/qwik";
import Avatar from "./avatar.webp?quality=100&jsx";
import { siteName } from "~/root.tsx";
import { PortalCard } from "./portal-card";
import { PortalLink, WebsiteLink, YouTubeLink } from "./portal-link";
import { YouTubeEmbeds } from "./youtube-embeds";

export default component$(() => {
    return (
        <>
            <div
                class="
                    flex flex-col items-center gap-4 pb-4 text-center text-xl
                    sm:flex-row sm:items-start sm:text-left sm:text-2xl
                "
            >
                <Avatar
                    alt={siteName}
                    loading="eager"
                    class="
                        rounded-md object-contain shadow-lg
                        hover:shadow-xl hover:ring-2 hover:ring-indigo-500/50
                        motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
                    "
                />

                <div>
                    <p>Howdy! My name is Austin.</p>
                    <p>I'm a gamer, musician, software engineer, and photographer.</p>
                    <p>You can find links to my content and websites below!</p>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <PortalCard variant="indigo" headingIconClass="icon-[tabler--music]" headingText="Music">
                        <YouTubeLink channelId="UCPjcGsO8o_FKPGHLQ5d1hbg" />

                        <h3 class="flex items-center gap-1.5 italic">
                            <span class="icon-[tabler--music-star]" aria-hidden="true"></span>
                            Featured
                        </h3>

                        <YouTubeEmbeds videoIds={["XjIJoM1AZyQ", "aPtQZNellaI"]} />
                    </PortalCard>
                </div>

                <div class="flex flex-col gap-4">
                    <PortalCard variant="pink" headingIconClass="icon-[tabler--device-gamepad-2]" headingText="Gaming">
                        <YouTubeLink channelId="UCQB1XVER5WPtxRESxHMG1Qw" />

                        <PortalLink
                            href="https://www.twitch.tv/smoothnanners"
                            variant="purple"
                            iconClass="icon-[tabler--brand-twitch]"
                        >
                            Twitch
                        </PortalLink>

                        <PortalLink
                            href="https://discord.gg/P7rhAhA"
                            variant="indigo"
                            iconClass="icon-[tabler--brand-discord-filled]"
                        >
                            Discord
                        </PortalLink>

                        <WebsiteLink href="https://gamebyline.com/">Game Byline</WebsiteLink>
                    </PortalCard>

                    <PortalCard variant="cyan" headingIconClass="icon-[tabler--terminal-2]" headingText="Programming">
                        <YouTubeLink channelId="UCJjowuNoLywGC7ujP74zFJg" />

                        <PortalLink
                            href="https://github.com/austins"
                            variant="slate"
                            iconClass="icon-[tabler--brand-github]"
                        >
                            GitHub
                        </PortalLink>

                        <WebsiteLink href="https://austinsdev.com/">Austin's Dev</WebsiteLink>
                    </PortalCard>

                    <PortalCard variant="blue" headingIconClass="icon-[tabler--user-circle]" headingText="Socials">
                        <PortalLink
                            href="https://www.instagram.com/smoothnanners"
                            variant="fuchsia"
                            iconClass="icon-[tabler--brand-instagram]"
                        >
                            Instagram
                        </PortalLink>

                        <PortalLink
                            href="https://t.me/smoothnanners"
                            variant="sky"
                            iconClass="icon-[tabler--brand-telegram]"
                        >
                            Telegram
                        </PortalLink>

                        <PortalLink
                            href="https://x.com/smoothnanners"
                            variant="black"
                            iconClass="icon-[tabler--brand-x]"
                        >
                            Twitter
                        </PortalLink>

                        <PortalLink
                            href="https://streamlabs.com/smoothnanners/tip"
                            variant="slate"
                            iconClass="icon-[tabler--pig-money]"
                        >
                            Tip
                        </PortalLink>

                        <PortalLink href="mailto:austin@austinsdev.com" variant="slate" iconClass="icon-[tabler--mail]">
                            Email
                        </PortalLink>
                    </PortalCard>
                </div>
            </div>
        </>
    );
});
