<script lang="ts">
    import { page } from "$app/stores";

    export let override: { status: number; message: string } | undefined = undefined;
</script>

<div class="text-sky-300">
    <h2>Error: {override ? override.status : $page.status}</h2>

    <p>{override ? override.message : $page.error?.message}</p>
</div>
