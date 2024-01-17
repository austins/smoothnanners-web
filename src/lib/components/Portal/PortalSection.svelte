<script lang="ts">
    import type { Snippet } from "svelte";

    let { iconClass, headingText, color, children } = $props<{
        iconClass: string;
        headingText: string;
        color: "fuchsia" | "purple" | "sky" | "dark";
        children: Snippet;
    }>();
</script>

<section
    class="mb-4 rounded-md border-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)] last:mb-0"
    class:border-fuchsia-600={color === "fuchsia"}
    class:border-purple-600={color === "purple"}
    class:border-sky-500={color === "sky"}
    class:border-indigo-500={color === "dark"}
>
    <h2 class="mb-0 flex items-center border-b-2 border-b-slate-600 py-2 px-3">
        <span class="{iconClass} mr-2" />
        <span>{headingText}</span>
    </h2>

    <div class="py-3 px-3">
        {@render children()}
    </div>
</section>
