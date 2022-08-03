<script lang="ts">
    import IconContext from "phosphor-svelte/lib/IconContext";
</script>

<IconContext
    values={{
        color: "white",
        size: 32,
        mirrored: false,
        weight: "fill",
    }}
>
    <slot />
</IconContext>
