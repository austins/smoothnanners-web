<script lang="ts">
    import { page } from "$app/stores";
    import Error from "$lib/components/Error.svelte";
</script>

<svelte:head>
    <title>Error: {$page.status} - SmoothNanners</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<Error />
