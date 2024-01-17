<script lang="ts">
    import type { Snippet } from "svelte";
    import "../app.css";

    let { children } = $props<{ children: Snippet }>();
</script>

<svelte:head>
    <meta name="description" content="SmoothNanners is a gamer, musician, software developer, and photographer." />
</svelte:head>

<div
    class="flex min-h-screen items-center text-xl leading-snug text-white drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] sm:text-2xl"
    data-sveltekit-preload-data="tap"
>
    <main class="container max-w-3xl">
        <h1>SmoothNanners</h1>

        {@render children()}
    </main>
</div>
