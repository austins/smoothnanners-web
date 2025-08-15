<script lang="ts">
    import PortalLink from "./PortalLink.svelte";

    let { channelId }: { channelId: string } = $props();
</script>

<PortalLink variant="red" href="https://www.youtube.com/channel/{channelId}" iconClass="icon-[bi--youtube]">
    YouTube
</PortalLink>
