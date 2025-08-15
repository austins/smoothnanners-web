<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        variant,
        headingIconClass,
        headingText,
        children
    }: {
        variant: "indigo" | "pink" | "cyan" | "blue";
        headingIconClass: string;
        headingText: string;
        children: Snippet;
    } = $props();
</script>

<section
    class={[
        "rounded-md border-3",
        variant === "indigo" && "border-indigo-500",
        variant === "pink" && "border-pink-500",
        variant === "cyan" && "border-cyan-400",
        variant === "blue" && "border-blue-400"
    ]}
>
    <header class="border-b-2 border-b-gray-500 px-3 py-2">
        <h2 class="flex items-center gap-1.5 text-3xl">
            <span class={headingIconClass}></span>
            {headingText}
        </h2>
    </header>

    <div class="flex flex-col gap-2 p-3">
        {@render children()}
    </div>
</section>
