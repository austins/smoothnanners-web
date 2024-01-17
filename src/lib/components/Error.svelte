<script lang="ts">
    import { getStores } from "$app/stores";

    const { page } = getStores();

    let { override } = $props<{ override?: { status: number; message: string } }>();

    const status = override ? override.status : $page.status;
    const message = override ? override.message : $page.error?.message ?? "An unexpected error has occurred.";
</script>

<svelte:head>
    <title>Error: {status} - SmoothNanners</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="text-sky-300">
    <h2>Error: {status}</h2>

    <p>{message}</p>
</div>
