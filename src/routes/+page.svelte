<script lang="ts">
    import PortalLink from "$lib/components/Portal/PortalLink.svelte";
    import PortalSection from "$lib/components/Portal/PortalSection.svelte";
    import PhMusicNotesFill from "~icons/ph/music-notes-fill";
    import PhYoutubeLogoFill from "~icons/ph/youtube-logo-fill";
    import PhGameControllerFill from "~icons/ph/game-controller-fill";
    import PhTwitchLogoBold from "~icons/ph/twitch-logo-bold";
    import PhDiscordLogoFill from "~icons/ph/discord-logo-fill";
    import PhGlobe from "~icons/ph/globe";
    import PhCode from "~icons/ph/code";
    import PhGithubLogo from "~icons/ph/github-logo";
    import PhUser from "~icons/ph/user";
    import PhCoins from "~icons/ph/coins";
    import PhAt from "~icons/ph/at";
    import YouTubeEmbed from "$lib/components/Portal/YouTubeEmbed.svelte";
    import PhStarFill from "~icons/ph/star-fill";
    import PhTwitterLogoFill from "~icons/ph/twitter-logo-fill";
</script>

<svelte:head>
    <title>SmoothNanners</title>
</svelte:head>

<section class="mb-3">
    <div class="min-[386px]:flex">
        <div class="mb-3 min-[386px]:mb-0 min-[386px]:mr-4">
            <img src="./assets/images/avatar.jpg" alt="SmoothNanners" class="rounded-md" />
        </div>

        <div class="mb-4 text-[0.92em]">
            <p>Howdy! My name is Austin.</p>

            <p>I'm a gamer, musician, software developer, and photographer.</p>

            <p>You can find links to my content and websites below!</p>
        </div>
    </div>
</section>

<div class="sm:grid sm:grid-cols-2 sm:gap-4">
    <div class="mb-4 sm:mb-0">
        <PortalSection icon={PhMusicNotesFill} headingText="Music" color="fuchsia">
            <PortalLink
                icon={PhYoutubeLogoFill}
                text="YouTube"
                href="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg"
                color="rose"
            />

            <div>
                <h3 class="italic"><PhStarFill class="inline-block" /> Featured</h3>

                <YouTubeEmbed id="0KSH337DTmY" />

                <YouTubeEmbed id="T-RMNSCZtGE" />
            </div>
        </PortalSection>
    </div>

    <div>
        <PortalSection icon={PhGameControllerFill} headingText="Gaming" color="purple">
            <PortalLink
                icon={PhYoutubeLogoFill}
                text="YouTube"
                href="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw"
                color="rose"
            />

            <PortalLink
                icon={PhTwitchLogoBold}
                text="Twitch"
                href="https://www.twitch.tv/smoothnanners"
                color="purple"
            />

            <PortalLink icon={PhDiscordLogoFill} text="Discord" href="https://discord.gg/P7rhAhA" color="dark" />

            <PortalLink icon={PhGlobe} text="Game Byline" href="https://gamebyline.com/" color="dark" />
        </PortalSection>

        <PortalSection icon={PhCode} headingText="Programming" color="sky">
            <PortalLink
                icon={PhYoutubeLogoFill}
                text="YouTube"
                href="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg"
                color="rose"
            />

            <PortalLink icon={PhGithubLogo} text="GitHub" href="https://github.com/austins" color="dark" />

            <PortalLink icon={PhGlobe} text="Austin's Dev" href="https://austinsdev.com/" color="dark" />
        </PortalSection>

        <PortalSection icon={PhUser} headingText="Social" color="dark">
            <PortalLink icon={PhTwitterLogoFill} text="Twitter" href="https://twitter.com/smoothnanners" color="sky" />

            <PortalLink
                icon={PhCoins}
                text="Donate / Tip"
                href="https://streamelements.com/smoothnanners/tip"
                color="dark"
            />

            <PortalLink icon={PhAt} text="Email" href="mailto:austin@austinsdev.com" color="dark" />
        </PortalSection>
    </div>
</div>
