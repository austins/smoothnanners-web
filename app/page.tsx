import avatar from "./avatar.webp";
import Image from "next/image";
import { PortalSection } from "@/app/PortalSection";
import {
    PiCode,
    PiEnvelope,
    PiGameControllerFill,
    PiGlobe,
    PiInstagramLogo,
    PiMusicNotes,
    PiPiggyBankFill,
    PiStarFill,
    PiUserCircleFill,
    PiXLogo,
    PiYoutubeLogoFill
} from "react-icons/pi";
import { PortalLink } from "@/app/PortalLink";
import { BiLogoDiscordAlt, BiLogoTwitch } from "react-icons/bi";
import { YouTubeEmbeds } from "@/app/YouTubeEmbeds";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-start gap-3 pb-3 sm:flex-row">
                <Image src={avatar} alt="SmoothNanners" className="rounded-md object-contain" loading="eager" />

                <div>
                    <p>Howdy! My name is Austin.</p>
                    <p>I&apos;m a gamer, musician, software engineer, and photographer.</p>
                    <p>You can find links to my content and websites below!</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                    <PortalSection variant="indigo" headingText="Music" headingIcon={<PiMusicNotes />}>
                        <PortalLink
                            variant="red"
                            icon={<PiYoutubeLogoFill />}
                            text="YouTube"
                            href="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg"
                        />

                        <h3 className="flex items-center gap-1.5 italic">
                            <PiStarFill /> Featured
                        </h3>

                        <YouTubeEmbeds videoIds={new Set(["lnWtTXtXc0A", "XjIJoM1AZyQ"])} />
                    </PortalSection>
                </div>

                <div className="flex flex-col gap-3">
                    <PortalSection variant="pink" headingText="Gaming" headingIcon={<PiGameControllerFill />}>
                        <PortalLink
                            variant="red"
                            icon={<PiYoutubeLogoFill />}
                            text="YouTube"
                            href="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw"
                        />

                        <PortalLink
                            variant="purple"
                            icon={<BiLogoTwitch />}
                            text="Twitch"
                            href="https://www.twitch.tv/smoothnanners"
                        />

                        <PortalLink
                            variant="indigo"
                            icon={<BiLogoDiscordAlt />}
                            text="Discord"
                            href="https://discord.gg/P7rhAhA"
                        />

                        <PortalLink
                            variant="slate"
                            icon={<PiGlobe />}
                            text="Game Byline"
                            href="https://gamebyline.com/"
                        />
                    </PortalSection>

                    <PortalSection variant="cyan" headingText="Programming" headingIcon={<PiCode />}>
                        <PortalLink
                            variant="red"
                            icon={<PiYoutubeLogoFill />}
                            text="YouTube"
                            href="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg"
                        />

                        <PortalLink
                            variant="slate"
                            icon={<PiGlobe />}
                            text="GitHub"
                            href="https://github.com/austins"
                        />

                        <PortalLink
                            variant="slate"
                            icon={<PiGlobe />}
                            text="Austin's Dev"
                            href="https://austinsdev.com/"
                        />
                    </PortalSection>

                    <PortalSection variant="blue" headingText="Social" headingIcon={<PiUserCircleFill />}>
                        <PortalLink
                            variant="sky"
                            icon={<PiXLogo />}
                            text="Twitter"
                            href="https://twitter.com/smoothnanners"
                        />

                        <PortalLink
                            variant="fuchsia"
                            icon={<PiInstagramLogo />}
                            text="Instagram"
                            href="https://www.instagram.com/smoothnanners"
                        />

                        <PortalLink
                            variant="slate"
                            icon={<PiPiggyBankFill />}
                            text="Tip"
                            href="https://streamlabs.com/smoothnanners/tip"
                        />

                        <PortalLink
                            variant="slate"
                            icon={<PiEnvelope />}
                            text="Email"
                            href="mailto:austin@austinsdev.com"
                        />
                    </PortalSection>
                </div>
            </div>
        </>
    );
}
