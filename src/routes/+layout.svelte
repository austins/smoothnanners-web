<script lang="ts">
    import "../app.css";
</script>

<div
    class="flex min-h-screen items-center text-lg leading-snug text-white drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] sm:text-2xl"
    data-sveltekit-preload-data="tap"
>
    <main class="container max-w-3xl">
        <h1 class="font-serif">SmoothNanners</h1>

        <slot />
    </main>
</div>
