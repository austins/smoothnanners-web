<script lang="ts">
    import Error from "$lib/components/Error.svelte";
</script>

<svelte:head>
    <title>Error: 404 - SmoothNanners</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<Error override={{ status: 404, message: "Page not found." }} />

<div class="mt-3">
    <a href="/">
        <button type="button">Go to Home</button>
    </a>
</div>
