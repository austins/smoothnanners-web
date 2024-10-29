"use client";

import { useState } from "react";
import Image from "next/image";

export function YouTubeEmbeds(props: { ids: string[] }) {
    const [currentId, setCurrentId] = useState<string | null>(null);

    return (
        <div className="space-y-3">
            {props.ids.map(id => (
                <div key={id}>
                    {id !== currentId
                        ? (
                                <div className="relative">
                                    <picture>
                                        <source type="image/webp" srcSet={`https://i.ytimg.com/vi_webp/${id}/mqdefault.webp`} />

                                        <Image
                                            src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
                                            alt="YouTube Video"
                                            width={332}
                                            height={186.75}
                                            className="w-full"
                                        />
                                    </picture>

                                    <a
                                        href={`https://www.youtube.com/watch?v=${id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="absolute top-0 flex size-full items-center justify-center text-6xl hover:brightness-[0.85]"
                                        aria-label="YouTube Video"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentId(id);
                                        }}
                                    >
                                        <span className="i-logos-youtube-icon" />
                                    </a>
                                </div>
                            )
                        : (
                                <iframe
                                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                    title="YouTube Video"
                                    allowFullScreen
                                    allow="autoplay"
                                    className="aspect-video w-full"
                                />
                            )}
                </div>
            ))}
        </div>
    );
}
