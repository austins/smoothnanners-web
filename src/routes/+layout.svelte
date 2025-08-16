<script lang="ts">
    import "../app.css";
    import favicon from "$lib/assets/favicon.ico";
    import { page } from "$app/state";

    let { children } = $props();
</script>

<svelte:head>
    <title>{page.data?.title && `${page.data.title} | `}SmoothNanners</title>
    <link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

<div
    class="
        flex min-h-screen items-center bg-blue-950 bg-gradient-to-b from-blue-950 to-blue-800 font-rounded-sans text-2xl
        text-white drop-shadow
    "
>
    <div class="container py-4">
        <header class="pb-3">
            <h1 class="font-classical-humanist text-5xl font-bold">SmoothNanners</h1>
        </header>

        <main>{@render children?.()}</main>
    </div>
</div>
