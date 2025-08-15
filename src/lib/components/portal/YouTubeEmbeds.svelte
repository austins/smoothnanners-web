<script lang="ts">
    let { videoIds }: { videoIds: string[] } = $props();

    let currentId = $state("");
</script>

<div class="flex flex-col gap-1.5">
    {#each videoIds as id (id)}
        {#if currentId !== id}
            <div class="relative">
                <img
                    src="https://i.ytimg.com/vi_webp/{id}/mqdefault.webp"
                    alt="YouTube Video"
                    width={328}
                    height={186.5}
                    class="w-full rounded-md"
                    decoding="async"
                    loading="eager"
                />

                <a
                    href="https://www.youtube.com/watch?v={id}"
                    aria-label="YouTube Video"
                    target="_blank"
                    rel="noreferrer"
                    class="
                        absolute inset-0 flex items-center justify-center
                        hover:brightness-75
                        motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-in-out
                    "
                    onclick={(e) => {
                        e.preventDefault();
                        currentId = id;
                    }}
                >
                    <span class="icon-[logos--youtube-icon] h-[3.6rem] w-[3.6rem]"></span>
                </a>
            </div>
        {:else}
            <iframe
                src="https://www.youtube.com/embed/{id}?autoplay=1"
                title="YouTube Video"
                allowFullScreen
                allow="autoplay"
                class="aspect-video h-auto w-full rounded-md"
            ></iframe>
        {/if}
    {/each}
</div>
