import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export const head: DocumentHead = { title: "Error: 404" };

export default component$(() => {
    return (
        <>
            <h2 class="text-4xl font-bold">Error: 404</h2>

            <p>The page you are looking for was not found.</p>

            <div class="mt-4">
                <Link
                    href="/"
                    class="
                        inline-block rounded-md border border-gray-600 bg-sky-600 px-3 py-2
                        hover:-translate-y-0.5 hover:scale-101 hover:bg-sky-700 hover:shadow-sm/30
                        motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
                    "
                >
                    Back to Home
                </Link>
            </div>
        </>
    );
});
