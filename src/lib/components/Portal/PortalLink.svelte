<script lang="ts">
    let {
        iconClass,
        text,
        href,
        color
    }: {
        iconClass: string;
        text: string;
        href: string;
        color: "rose" | "purple" | "sky" | "dark";
    } = $props();
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
    <span class="{iconClass} mr-2" />
    <span>{text}</span>
</a>
