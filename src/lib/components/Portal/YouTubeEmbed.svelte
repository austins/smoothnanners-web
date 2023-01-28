<script lang="ts">
    import LogosYoutubeIcon from "~icons/logos/youtube-icon";

    export let id: string;

    let showEmbed = false;
</script>

<div class="mb-3 last:mb-0">
    {#if !showEmbed}
        <a
            href={`https://youtu.be/${id}`}
            target="_blank"
            rel="noreferrer"
            on:click|preventDefault={() => (showEmbed = true)}
            class="relative block"
            data-sveltekit-preload-data="off"
        >
            <div class="absolute flex h-full w-full items-center justify-center text-6xl hover:brightness-[0.85]">
                <LogosYoutubeIcon />
            </div>

            <img
                src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
                alt="YouTube Video"
                width="332"
                height="186.75"
                class="w-full"
            />
        </a>
    {:else}
        <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube Video"
            allowfullscreen
            allow="autoplay"
            class="aspect-video w-full"
        />
    {/if}
</div>
