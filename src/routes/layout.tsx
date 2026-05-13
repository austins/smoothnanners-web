import { component$, Slot } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { siteName } from "~/root.tsx";

export const head: DocumentHead = {
    meta: [
        { name: "description", content: "SmoothNanners is a gamer, musician, software developer, and photographer." }
    ]
};

export default component$(() => {
    return (
        <div
            class="
                flex min-h-screen items-center bg-blue-950 bg-radial-[at_top] from-indigo-500/9 to-70% font-rounded-sans
                text-2xl text-white drop-shadow-sm
            "
        >
            <div class="container mx-auto max-w-3xl p-4">
                <header class="pb-3">
                    <h1
                        class="
                            bg-linear-to-r from-white to-gray-100 bg-clip-text text-center font-classical-humanist
                            text-4xl font-bold text-transparent
                            sm:text-left sm:text-5xl
                        "
                    >
                        {siteName}
                    </h1>
                </header>

                <main>
                    <Slot />
                </main>
            </div>
        </div>
    );
});
