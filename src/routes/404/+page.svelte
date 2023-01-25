<script lang="ts">
    import Error from "$lib/components/Error.svelte";
</script>

<Error override={{ status: 404, message: "Page not found." }} />

<div class="mt-4">
    <a href="/">
        <button type="button">Go to Home</button>
    </a>
</div>
