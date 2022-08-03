<script lang="ts">
    import avatar from "$lib/assets/images/avatar.jpg";
    import Portal from "$lib/components/portal/Portal.svelte";
    import PortalSection from "$lib/components/portal/PortalSection.svelte";
    import PortalLink from "$lib/components/portal/PortalLink.svelte";
    import GameController from "phosphor-svelte/lib/GameController";
    import YoutubeLogo from "phosphor-svelte/lib/YoutubeLogo";
    import TwitchLogo from "phosphor-svelte/lib/TwitchLogo";
    import DiscordLogo from "phosphor-svelte/lib/DiscordLogo";
    import Globe from "phosphor-svelte/lib/Globe";
    import At from "phosphor-svelte/lib/At";
    import Code from "phosphor-svelte/lib/Code";
    import Coins from "phosphor-svelte/lib/Coins";
    import GithubLogo from "phosphor-svelte/lib/GithubLogo";
    import MusicNotes from "phosphor-svelte/lib/MusicNotes";
    import TwitterLogo from "phosphor-svelte/lib/TwitterLogo";
    import User from "phosphor-svelte/lib/User";
</script>

<svelte:head>
    <title>SmoothNanners</title>

    <meta name="description" content="SmoothNanners is a gamer, musician, software developer, and photographer." />
</svelte:head>

<div class="d-flex mb-4">
    <div id="avatar" class="flex-shrink-1">
        <img src={avatar} alt="SmoothNanners" class="img-fluid rounded-2" />
    </div>

    <div id="bio" class="w-100 text-white fs-5 ms-3">
        <p>Howdy! My name is Austin.</p>

        <p>I&apos;m a gamer, musician, software developer, and photographer.</p>

        <p class="mb-0">You can find links to my content and websites below!</p>
    </div>
</div>

<Portal>
    <PortalSection variant="primary" title="Gaming">
        <GameController slot="icon" />

        <svelte:fragment slot="links">
            <PortalLink variant="danger" url="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw" text="YouTube">
                <YoutubeLogo slot="icon" />
            </PortalLink>

            <PortalLink variant="primary" url="https://www.twitch.tv/smoothnanners" text="Twitch">
                <TwitchLogo slot="icon" weight="bold" />
            </PortalLink>

            <PortalLink variant="dark" url="https://discord.gg/P7rhAhA" text="Discord">
                <DiscordLogo slot="icon" />
            </PortalLink>

            <PortalLink variant="dark" url="https://gamebyline.com" text="Game Byline">
                <Globe slot="icon" weight="regular" />
            </PortalLink>
        </svelte:fragment>
    </PortalSection>

    <PortalSection variant="secondary" title="Music">
        <MusicNotes slot="icon" weight="fill" />

        <svelte:fragment slot="links">
            <PortalLink variant="danger" url="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg" text="YouTube">
                <YoutubeLogo slot="icon" weight="fill" />
            </PortalLink>
        </svelte:fragment>
    </PortalSection>

    <PortalSection variant="light" title="Programming">
        <Code slot="icon" weight="regular" />

        <svelte:fragment slot="links">
            <PortalLink variant="danger" url="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg" text="YouTube">
                <YoutubeLogo slot="icon" weight="fill" />
            </PortalLink>

            <PortalLink variant="dark" url="https://github.com/austins" text="GitHub">
                <GithubLogo slot="icon" weight="regular" />
            </PortalLink>

            <PortalLink variant="dark" url="https://austinsdev.com" text="Austin&apos;s Dev">
                <Globe slot="icon" weight="regular" />
            </PortalLink>
        </svelte:fragment>
    </PortalSection>

    <PortalSection variant="dark" title="Social">
        <User slot="icon" weight="regular" />

        <svelte:fragment slot="links">
            <PortalLink variant="info" url="https://twitter.com/smoothnanners" text="Twitter">
                <TwitterLogo slot="icon" weight="fill" />
            </PortalLink>

            <PortalLink variant="dark" url="https://streamelements.com/smoothnanners/tip" text="Donate / Tip">
                <Coins slot="icon" weight="regular" />
            </PortalLink>

            <PortalLink variant="dark" url="mailto:austin@austinsdev.com" text="Email">
                <At slot="icon" weight="regular" />
            </PortalLink>
        </svelte:fragment>
    </PortalSection>
</Portal>

<style lang="scss">
    #avatar {
        width: 264px;

        @include media-breakpoint-down(sm) {
            max-width: 27.4vw;
        }
    }

    #bio {
        @include media-breakpoint-down(sm) {
            font-size: 3.4vw !important;
        }
    }
</style>
