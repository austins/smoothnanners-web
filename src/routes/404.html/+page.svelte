<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<h2 class="text-4xl font-bold">{data.title}</h2>

<p>The page you are looking for was not found.</p>

<div class="mt-4">
    <a
        href="/"
        class="
            rounded-md border border-gray-600 bg-indigo-500 px-3 py-2
            hover:bg-indigo-600
            motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out
        "
    >
        Back to Home
    </a>
</div>
