import Image from "next/image";
import avatar from "../public/images/avatar.jpg";
import { PortalSection } from "@/components/portal/PortalSection";
import { PortalLink } from "@/components/portal/PortalLink";
import { YouTubeEmbed } from "@/components/portal/YouTubeEmbed";

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

            <div className="sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="mb-4 sm:mb-0">
                    <PortalSection iconClass="icon-[ph--music-notes-fill]" headingText="Music" color="fuchsia">
                        <PortalLink
                            iconClass="icon-[ph--youtube-logo-fill]"
                            href="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg"
                            color="rose"
                        >
                            YouTube
                        </PortalLink>

                        <div>
                            <h3 className="flex items-center">
                                <span className="icon-[ph--star-fill] mr-2" />
                                <span className="italic">Featured</span>
                            </h3>

                            <YouTubeEmbed id="lnWtTXtXc0A" />

                            <YouTubeEmbed id="XjIJoM1AZyQ" />
                        </div>
                    </PortalSection>
                </div>

                <div>
                    <PortalSection iconClass="icon-[ph--game-controller-fill]" headingText="Gaming" color="purple">
                        <PortalLink
                            iconClass="icon-[ph--youtube-logo-fill]"
                            href="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw"
                            color="rose"
                        >
                            YouTube
                        </PortalLink>

                        <PortalLink
                            iconClass="icon-[ph--twitch-logo-bold]"
                            href="https://www.twitch.tv/smoothnanners"
                            color="purple"
                        >
                            Twitch
                        </PortalLink>

                        <PortalLink
                            iconClass="icon-[ph--discord-logo-fill]"
                            href="https://discord.gg/P7rhAhA"
                            color="dark"
                        >
                            Discord
                        </PortalLink>

                        <PortalLink iconClass="icon-[ph--globe]" href="https://gamebyline.com/" color="dark">
                            Game Byline
                        </PortalLink>
                    </PortalSection>

                    <PortalSection iconClass="icon-[ph--code]" headingText="Programming" color="sky">
                        <PortalLink
                            iconClass="icon-[ph--youtube-logo-fill]"
                            href="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg"
                            color="rose"
                        >
                            YouTube
                        </PortalLink>

                        <PortalLink
                            iconClass="icon-[ph--github-logo]"
                            href="https://github.com/austins"
                            color="dark"
                        >
                            GitHub
                        </PortalLink>

                        <PortalLink iconClass="icon-[ph--globe]" href="https://austinsdev.com/" color="dark">
                            Austin&apos;s Dev
                        </PortalLink>
                    </PortalSection>

                    <PortalSection iconClass="icon-[ph--user]" headingText="Social" color="dark">
                        <PortalLink
                            iconClass="icon-[ph--twitter-logo-fill]"
                            href="https://twitter.com/smoothnanners"
                            color="sky"
                        >
                            Twitter
                        </PortalLink>

                        <PortalLink
                            iconClass="icon-[ph--coins]"
                            href="https://streamelements.com/smoothnanners/tip"
                            color="dark"
                        >
                            Donate / Tip
                        </PortalLink>

                        <PortalLink iconClass="icon-[ph--at]" href="mailto:austin@austinsdev.com" color="dark">
                            Email
                        </PortalLink>
                    </PortalSection>
                </div>
            </div>
        </>
    );
}
