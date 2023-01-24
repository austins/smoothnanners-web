<script lang="ts">
    import type { default as IconComponent } from "~icons/*";

    export let icon: typeof IconComponent;
    export let headingText: string;
    export let color: "fuchsia" | "purple" | "sky" | "dark";
</script>

<section
    class="mb-4 rounded-md border-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] last:mb-0"
    class:border-fuchsia-600={color === "fuchsia"}
    class:border-purple-600={color === "purple"}
    class:border-sky-600={color === "sky"}
    class:border-indigo-600={color === "dark"}
>
    <h2 class="mb-0 border-b-2 border-b-slate-600 py-2 px-3">
        <svelte:component this={icon} class="inline-block" />
        {headingText}
    </h2>

    <div class="py-3 px-3">
        <slot />
    </div>
</section>
