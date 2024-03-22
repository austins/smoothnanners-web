"use client";

import { useState } from "react";
import Image from "next/image";

export function YouTubeEmbed({ id }: { id: string }) {
    const [showEmbed, setShowEmbed] = useState(false);

    return (
        <div className="mb-3 last:mb-0">
            {!showEmbed
                ? (
                    <a
                        href={`https://youtu.be/${id}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowEmbed(true);
                        }}
                        className="relative block"
                    >
                        <div className="absolute flex size-full items-center justify-center text-6xl hover:brightness-[0.85]">
                            <span className="icon-[logos--youtube-icon]" />
                        </div>

                        <Image
                            src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
                            alt="YouTube Video"
                            width={332}
                            height={186.75}
                            className="w-full"
                        />
                    </a>
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
    );
}
