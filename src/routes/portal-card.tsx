import { component$, Slot } from "@builder.io/qwik";

export const PortalCard = component$(
    (props: { variant: "indigo" | "pink" | "cyan" | "blue"; headingIconClass: string; headingText: string }) => {
        return (
            <div
                class="
                    motion-safe:transition-all motion-safe:duration-360 motion-safe:ease-in-out
                    motion-safe:starting:translate-y-2 motion-safe:starting:opacity-0
                "
            >
                <section
                    class={[
                        props.variant === "indigo" && "border-indigo-500 shadow-indigo-500/20",
                        props.variant === "pink" && "border-pink-500 shadow-pink-500/20",
                        props.variant === "cyan" && "border-cyan-400 shadow-cyan-400/20",
                        props.variant === "blue" && "border-blue-400 shadow-blue-400/20",
                        `
                            rounded-md border-3 bg-white/5 shadow-lg
                            hover:border-gray-300 hover:bg-white/7 hover:shadow-xl hover:shadow-gray-300/20
                            motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
                        `
                    ]}
                >
                    <header class="border-b-2 border-b-gray-500 px-3 py-2">
                        <h2 class="flex items-center gap-1.5 text-3xl">
                            <span class={props.headingIconClass} aria-hidden="true" />
                            {props.headingText}
                        </h2>
                    </header>

                    <div class="flex flex-col gap-2 p-3">
                        <Slot />
                    </div>
                </section>
            </div>
        );
    }
);
