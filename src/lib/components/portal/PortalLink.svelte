<script lang="ts">
    import type { BootstrapVariant } from "$lib/types/BootstrapVariant";

    export let variant: BootstrapVariant;
    export let url: string;
    export let text: string;
</script>

<a href={url} class="btn btn-{variant} btn-lg text-start d-flex align-items-center" target="_blank">
    <slot name="icon" />

    <div class="d-inline-block align-middle ms-2">{text}</div>
</a>
