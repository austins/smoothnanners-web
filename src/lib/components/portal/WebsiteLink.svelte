<script lang="ts">
    import type { Snippet } from "svelte";
    import PortalLink from "./PortalLink.svelte";

    let { href, children }: { href: string; children: Snippet } = $props();
</script>

<PortalLink variant="slate" {href} iconClass="icon-[bi--globe]">
    {@render children()}
</PortalLink>
