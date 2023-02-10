<script lang="ts">
    import Error from "$lib/components/Error.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<Error override={{ status: 404, message: "Page not found." }} />

<div class="mt-4">
    <Button href="/" text="Go to Home" />
</div>
