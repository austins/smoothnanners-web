import { component$, useSignal } from "@builder.io/qwik";

export const YouTubeEmbeds = component$((props: { videoIds: string[] }) => {
    const currentId = useSignal<string | null>(null);

    return (
        <div class="flex flex-col gap-2">
            {props.videoIds.map((videoId) => (
                <div key={videoId}>
                    {currentId.value !== videoId ? (
                        <div class="relative">
                            <img
                                src={`https://i.ytimg.com/vi_webp/${videoId}/mqdefault.webp`}
                                alt="YouTube video"
                                width="328"
                                height="186"
                                class="w-full rounded-md"
                                decoding="async"
                                loading="lazy"
                            />

                            <a
                                href={`https://www.youtube.com/watch?v=${videoId}`}
                                aria-label="Play YouTube video"
                                target="_blank"
                                rel="external noreferrer"
                                class="
                                    group absolute inset-0 flex items-center justify-center
                                    hover:brightness-80
                                    motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
                                "
                                preventdefault:click
                                onclick$={() => {
                                    currentId.value = videoId;
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3.6rem"
                                    height="3.6rem"
                                    viewBox="0 0 256 180"
                                    aria-hidden="true"
                                    class="
                                        group-hover:scale-105
                                        motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out
                                    "
                                >
                                    <path
                                        fill="#f00"
                                        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                                    />
                                    <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                                </svg>
                            </a>
                        </div>
                    ) : (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube Video"
                            allow="autoplay; fullscreen"
                            class="aspect-video h-auto w-full rounded-md"
                        />
                    )}
                </div>
            ))}
        </div>
    );
});
