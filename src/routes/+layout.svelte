<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <meta name="description" content="SmoothNanners is a gamer, musician, software developer, and photographer." />
</svelte:head>

<div
    class="flex min-h-screen items-center text-xl leading-snug text-white drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] sm:text-2xl"
>
    <main class="container">
        <h1 class="font-handwritten">SmoothNanners</h1>

        {@render children()}
    </main>
</div>
