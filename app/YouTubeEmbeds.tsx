"use client";

import { PiStarFill } from "react-icons/pi";
import { useRef, useState } from "react";
import YouTube from "react-youtube";

export function YouTubeEmbeds(props: { videoIds: Set<string> }) {
    const [playedIds, setPlayedIds] = useState(new Set<string>());
    const youTubeRefs = useRef(new Map<string, YouTube>());

    return (
        <>
            <h3 className="flex items-center gap-1.5 italic">
                <PiStarFill /> Featured
            </h3>

            {[...props.videoIds].map(id => (
                <div key={id}>
                    {playedIds.has(id) ? (
                        <YouTube
                            videoId={id}
                            title="YouTube Video"
                            iframeClassName="aspect-video h-auto w-full"
                            opts={{ playerVars: { autoplay: 1 } }}
                            onPlay={() => {
                                for (const [visibleId, youTubeElement] of youTubeRefs.current) {
                                    if (visibleId !== id) {
                                        youTubeElement.getInternalPlayer().pauseVideo();
                                    }
                                }
                            }}
                            ref={element => {
                                youTubeRefs.current.set(id, element!);
                            }}
                        />
                    ) : (
                        <div className="relative">
                            <picture>
                                <source type="image/webp" srcSet={`https://i.ytimg.com/vi_webp/${id}/mqdefault.webp`} />

                                <img
                                    src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
                                    alt="YouTube Video"
                                    width={328}
                                    height={186.5}
                                    className="w-full rounded-md"
                                    loading="lazy"
                                />
                            </picture>

                            <a
                                href={`https://www.youtube.com/watch?v=${id}`}
                                aria-label="YouTube Video"
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 flex items-center justify-center transition-all duration-150 ease-in-out hover:brightness-75"
                                onClick={e => {
                                    e.preventDefault();
                                    setPlayedIds(state => new Set([...state, id]));
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 256 180"
                                    className="text-[3.6rem]"
                                >
                                    <path
                                        fill="red"
                                        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                                    />
                                    <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
