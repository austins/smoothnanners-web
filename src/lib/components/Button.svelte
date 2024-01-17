<script lang="ts">
    let {
        text,
        href,
        type = "button"
    } = $props<{
        text: string;
        href?: string;
        type?: HTMLButtonElement["type"];
    }>();

    const isLink = !!href?.length;
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
