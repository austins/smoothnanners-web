<script lang="ts">
    import PortalLink from "$lib/components/Portal/PortalLink.svelte";
    import PortalSection from "$lib/components/Portal/PortalSection.svelte";
    import YouTubeEmbed from "$lib/components/Portal/YouTubeEmbed.svelte";
</script>

<svelte:head>
    <title>SmoothNanners</title>
</svelte:head>

<section class="mb-4">
    <div class="min-[386px]:flex">
        <div class="mb-3 min-[386px]:mb-0 min-[386px]:mr-4">
            <img
                src="./assets/images/avatar.jpg"
                alt="SmoothNanners"
                width="171.35"
                height="171.35"
                class="rounded-md"
            />
        </div>

        <div class="text-[0.95em]">
            <p>Howdy! My name is Austin.</p>

            <p>I'm a gamer, musician, software engineer, and photographer.</p>

            <p>You can find links to my content and websites below!</p>
        </div>
    </div>
</section>

<div class="sm:grid sm:grid-cols-2 sm:gap-4">
    <div class="mb-4 sm:mb-0">
        <PortalSection iconClass="icon-[ph--music-notes-fill]" headingText="Music" color="fuchsia">
            <PortalLink
                iconClass="icon-[ph--youtube-logo-fill]"
                text="YouTube"
                href="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg"
                color="rose"
            />

            <div>
                <h3 class="flex items-center">
                    <span class="icon-[ph--star-fill] mr-2" />
                    <span class="italic">Featured</span>
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
                text="YouTube"
                href="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw"
                color="rose"
            />

            <PortalLink
                iconClass="icon-[ph--twitch-logo-bold]"
                text="Twitch"
                href="https://www.twitch.tv/smoothnanners"
                color="purple"
            />

            <PortalLink
                iconClass="icon-[ph--discord-logo-fill]"
                text="Discord"
                href="https://discord.gg/P7rhAhA"
                color="dark"
            />

            <PortalLink iconClass="icon-[ph--globe]" text="Game Byline" href="https://gamebyline.com/" color="dark" />
        </PortalSection>

        <PortalSection iconClass="icon-[ph--code]" headingText="Programming" color="sky">
            <PortalLink
                iconClass="icon-[ph--youtube-logo-fill]"
                text="YouTube"
                href="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg"
                color="rose"
            />

            <PortalLink
                iconClass="icon-[ph--github-logo]"
                text="GitHub"
                href="https://github.com/austins"
                color="dark"
            />

            <PortalLink iconClass="icon-[ph--globe]" text="Austin's Dev" href="https://austinsdev.com/" color="dark" />
        </PortalSection>

        <PortalSection iconClass="icon-[ph--user]" headingText="Social" color="dark">
            <PortalLink
                iconClass="icon-[ph--twitter-logo-fill]"
                text="Twitter"
                href="https://twitter.com/smoothnanners"
                color="sky"
            />

            <PortalLink
                iconClass="icon-[ph--coins]"
                text="Donate / Tip"
                href="https://streamelements.com/smoothnanners/tip"
                color="dark"
            />

            <PortalLink iconClass="icon-[ph--at]" text="Email" href="mailto:austin@austinsdev.com" color="dark" />
        </PortalSection>
    </div>
</div>
