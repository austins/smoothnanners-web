<script lang="ts">
    import type { default as IconComponent } from "~icons/*";

    export let icon: typeof IconComponent;
    export let text: string;
    export let href: string;
    export let color: "rose" | "purple" | "sky" | "dark";
</script>

<a
    {href}
    target="_blank"
    rel="noreferrer"
    class="mb-3 flex items-center rounded-md py-2 px-3 last:mb-0 hover:brightness-[0.85] active:brightness-[0.85]"
    class:bg-rose-500={color === "rose"}
    class:bg-purple-500={color === "purple"}
    class:bg-sky-500={color === "sky"}
    class:bg-indigo-700={color === "dark"}
    data-sveltekit-preload-data="off"
>
    <svelte:component this={icon} class="mr-2" />
    <span>{text}</span>
</a>
