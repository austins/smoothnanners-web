import Image from "next/image";
import avatar from "./avatar.jpg";
import { PortalSection } from "@/components/portal/PortalSection";
import { YouTubeLink } from "@/components/portal/YouTubeLink";
import { PortalLink } from "@/components/portal/PortalLink";
import { WebsiteLink } from "@/components/portal/WebsiteLink";
import { YouTubeEmbeds } from "@/components/portal/YouTubeEmbeds";

export default function Home() {
    return (
        <>
            <section className="mb-4">
                <div className="min-[386px]:flex">
                    <div className="mb-3 min-[386px]:mb-0 min-[386px]:mr-4">
                        <Image
                            src={avatar}
                            alt="SmoothNanners"
                            width={171.35}
                            height={171.35}
                            className="rounded-md"
                            priority
                        />
                    </div>

                    <div className="text-[0.95em]">
                        <p>Howdy! My name is Austin.</p>
                        <p>I&apos;m a gamer, musician, software engineer, and photographer.</p>
                        <p>You can find links to my content and websites below!</p>
                    </div>
                </div>
            </section>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <PortalSection iconClassName="i-ph-music-notes" headingText="Music" color="fuchsia">
                        <YouTubeLink slug="UCPjcGsO8o_FKPGHLQ5d1hbg" />

                        <h3 className="flex items-center">
                            <span className="i-ph-star-fill mr-2" />
                            <span className="italic">Featured</span>
                        </h3>

                        <YouTubeEmbeds ids={["lnWtTXtXc0A", "XjIJoM1AZyQ"]} />
                    </PortalSection>
                </div>

                <div className="space-y-4">
                    <PortalSection iconClassName="i-ph-game-controller" headingText="Gaming" color="purple">
                        <YouTubeLink slug="UCQB1XVER5WPtxRESxHMG1Qw" />

                        <PortalLink
                            bgClassName="bg-purple-600"
                            iconClassName="i-logos-twitch brightness-0 invert"
                            href="https://www.twitch.tv/smoothnanners"
                        >
                            Twitch
                        </PortalLink>

                        <PortalLink
                            bgClassName="bg-indigo-600"
                            iconClassName="i-logos-discord-icon brightness-0 invert"
                            href="https://discord.gg/P7rhAhA"
                        >
                            Discord
                        </PortalLink>

                        <WebsiteLink href="https://gamebyline.com">Game Byline</WebsiteLink>
                    </PortalSection>

                    <PortalSection iconClassName="i-ph-code" headingText="Programming" color="sky">
                        <YouTubeLink slug="UCJjowuNoLywGC7ujP74zFJg" />

                        <PortalLink
                            bgClassName="bg-indigo-600"
                            iconClassName="i-logos-github-icon brightness-0 invert"
                            href="https://github.com/austins"
                        >
                            GitHub
                        </PortalLink>

                        <WebsiteLink href="https://austinsdev.com">Austin&apos;s Dev</WebsiteLink>
                    </PortalSection>

                    <PortalSection iconClassName="i-ph-user-circle" headingText="Social" color="indigo">
                        <PortalLink
                            bgClassName="bg-sky-600"
                            iconClassName="i-ph-x-logo"
                            href="https://x.com/SmoothNanners"
                        >
                            Twitter
                        </PortalLink>

                        <PortalLink
                            bgClassName="bg-violet-600"
                            iconClassName="i-ph-instagram-logo"
                            href="https://www.instagram.com/smoothnanners"
                        >
                            Instagram
                        </PortalLink>

                        <PortalLink
                            bgClassName="bg-indigo-600"
                            iconClassName="i-ph-tip-jar-fill"
                            href="https://streamlabs.com/smoothnanners/tip"
                        >
                            Tip
                        </PortalLink>

                        <PortalLink
                            bgClassName="bg-indigo-600"
                            iconClassName="i-ph-at"
                            href="mailto:austin@austinsdev.com"
                        >
                            Email
                        </PortalLink>
                    </PortalSection>
                </div>
            </div>
        </>
    );
}
