<script lang="ts">
    import avatar from "$lib/assets/avatar.webp";
    import PortalLink from "$lib/components/portal/PortalLink.svelte";
    import PortalSection from "$lib/components/portal/PortalSection.svelte";
    import WebsiteLink from "$lib/components/portal/WebsiteLink.svelte";
    import YouTubeEmbeds from "$lib/components/portal/YouTubeEmbeds.svelte";
    import YouTubeLink from "$lib/components/portal/YouTubeLink.svelte";
</script>

<svelte:head>
    <meta name="description" content="SmoothNanners is a gamer, musician, software developer, and photographer." />
</svelte:head>

<div class="flex flex-col items-start gap-3 pb-3 sm:flex-row">
    <img
        src={avatar}
        width={200}
        height={200}
        alt="SmoothNanners"
        class="rounded-md object-contain"
        decoding="async"
        loading="eager"
    />

    <div>
        <p>Howdy! My name is Austin.</p>
        <p>I'm a gamer, musician, software engineer, and photographer.</p>
        <p>You can find links to my content and websites below!</p>
    </div>
</div>

<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <div>
        <PortalSection variant="indigo" headingIconClass="icon-[bi--music-note-beamed]" headingText="Music">
            <YouTubeLink channelId="UCPjcGsO8o_FKPGHLQ5d1hbg" />

            <h3 class="flex items-center gap-1.5 italic">
                <span class="icon-[bi--star-fill]"></span>
                Featured
            </h3>

            <YouTubeEmbeds videoIds={["XjIJoM1AZyQ", "aPtQZNellaI"]} />
        </PortalSection>
    </div>

    <div class="flex flex-col gap-3">
        <PortalSection variant="pink" headingIconClass="icon-[bi--controller]" headingText="Gaming">
            <YouTubeLink channelId="UCQB1XVER5WPtxRESxHMG1Qw" />

            <PortalLink variant="purple" iconClass="icon-[bi--twitch]" href="https://www.twitch.tv/smoothnanners">
                Twitch
            </PortalLink>

            <PortalLink variant="indigo" iconClass="icon-[bi--discord]" href="https://discord.gg/P7rhAhA">
                Discord
            </PortalLink>

            <WebsiteLink href="https://gamebyline.com/">Game Byline</WebsiteLink>
        </PortalSection>

        <PortalSection variant="cyan" headingIconClass="icon-[bi--code-slash]" headingText="Programming">
            <YouTubeLink channelId="UCJjowuNoLywGC7ujP74zFJg" />

            <PortalLink variant="slate" iconClass="icon-[bi--github]" href="https://github.com/austins">
                GitHub
            </PortalLink>

            <WebsiteLink href="https://austinsdev.com/">Austin's Dev</WebsiteLink>
        </PortalSection>

        <PortalSection variant="blue" headingIconClass="icon-[bi--person-circle]" headingText="Socials">
            <PortalLink
                variant="fuchsia"
                iconClass="icon-[bi--instagram]"
                href="https://www.instagram.com/smoothnanners"
            >
                Instagram
            </PortalLink>

            <PortalLink variant="sky" iconClass="icon-[bi--telegram]" href="https://t.me/smoothnanners">
                Telegram
            </PortalLink>

            <PortalLink variant="black" iconClass="icon-[bi--twitter-x]" href="https://x.com/smoothnanners">
                Twitter
            </PortalLink>

            <PortalLink
                variant="slate"
                iconClass="icon-[bi--piggy-bank-fill]"
                href="https://streamlabs.com/smoothnanners/tip"
            >
                Tip
            </PortalLink>

            <PortalLink variant="slate" iconClass="icon-[bi--envelope-fill]" href="mailto:austin@austinsdev.com">
                Email
            </PortalLink>
        </PortalSection>
    </div>
</div>
