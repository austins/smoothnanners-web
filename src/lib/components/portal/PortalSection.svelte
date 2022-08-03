<script lang="ts">
    import type { BootstrapVariant } from "$lib/types/BootstrapVariant";

    export let variant: BootstrapVariant;
    export let title: string;
</script>

<section class="card border-{variant} mb-4">
    <div class="card-header d-flex align-items-center">
        <slot name="icon" />

        <div class="d-inline-block fs-4 align-middle ms-2">{title}</div>
    </div>

    <div class="card-body">
        <div class="card-text d-grid gap-3">
            <slot name="links" />
        </div>
    </div>
</section>
