<script lang="ts">
    import { page } from "$app/stores";

    export let override: { status: number; message: string } | undefined = undefined;

    $: status = override ? override.status : $page.status;
    $: message = override ? override.message : $page.error?.message;
</script>

<svelte:head>
    <title>Error: {status} - SmoothNanners</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="text-sky-300">
    <h2>Error: {status}</h2>

    <p>{message}</p>
</div>
