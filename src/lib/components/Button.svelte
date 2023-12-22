<script lang="ts">
    export let text: string;
    export let href: string | null = null;
    export let type: HTMLButtonElement["type"] = "button";

    $: isLink = !!href?.length;
</script>

<svelte:element
    this={isLink ? "a" : "button"}
    {href}
    type={!isLink ? type : null}
    class="rounded-md bg-blue-600 px-3 py-2 hover:bg-blue-700 active:bg-blue-700"
    class:inline-block={isLink}
>
    {text}
</svelte:element>
