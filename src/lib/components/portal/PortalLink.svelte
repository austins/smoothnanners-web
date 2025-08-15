<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        variant,
        href,
        iconClass,
        children
    }: {
        variant: "black" | "fuchsia" | "indigo" | "purple" | "red" | "sky" | "slate";
        href: string;
        iconClass: string;
        children: Snippet;
    } = $props();
</script>

<a
    {href}
    target="_blank"
    rel="noreferrer"
    class={[
        `
            flex items-center gap-1.5 rounded-md border border-gray-600 px-3 py-2
            motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out
        `,
        variant == "black" && "bg-black hover:bg-gray-900",
        variant == "fuchsia" && "bg-fuchsia-600 hover:bg-fuchsia-700",
        variant == "indigo" && "bg-indigo-500 hover:bg-indigo-600",
        variant == "purple" && "bg-purple-600 hover:bg-purple-700",
        variant == "red" && "bg-red-600 hover:bg-red-700",
        variant == "sky" && "bg-sky-600 hover:bg-sky-700",
        variant == "slate" && "bg-slate-800 hover:bg-slate-900"
    ]}
>
    <span class={iconClass}></span>
    {@render children()}
</a>
