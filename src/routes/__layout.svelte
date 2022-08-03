<script lang="ts">
    import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Open+Sans:wght@300&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div id="main" class="container d-flex align-items-center py-3">
    <div class="w-100">
        <Header />

        <main><slot /></main>
    </div>
</div>

<style lang="scss" global>
    @import "bootstrap/scss/root";
    @import "bootstrap/scss/reboot";
    // @import 'bootstrap/scss/type';
    @import "bootstrap/scss/images";
    @import "bootstrap/scss/containers";
    // @import 'bootstrap/scss/grid';
    // @import 'bootstrap/scss/tables';
    // @import 'bootstrap/scss/forms';
    @import "bootstrap/scss/buttons";
    // @import 'bootstrap/scss/transitions';
    // @import 'bootstrap/scss/dropdown';
    // @import 'bootstrap/scss/button-group';
    // @import 'bootstrap/scss/nav';
    // @import 'bootstrap/scss/navbar';
    @import "bootstrap/scss/card";
    // @import 'bootstrap/scss/accordion';
    // @import 'bootstrap/scss/breadcrumb';
    // @import 'bootstrap/scss/pagination';
    // @import 'bootstrap/scss/badge';
    // @import 'bootstrap/scss/alert';
    // @import 'bootstrap/scss/progress';
    // @import 'bootstrap/scss/list-group';
    // @import 'bootstrap/scss/close';
    // @import 'bootstrap/scss/toasts';
    // @import 'bootstrap/scss/modal';
    // @import 'bootstrap/scss/tooltip';
    // @import 'bootstrap/scss/popover';
    // @import 'bootstrap/scss/carousel';
    // @import 'bootstrap/scss/spinners';
    // @import 'bootstrap/scss/offcanvas';
    // @import 'bootstrap/scss/placeholders';
    // @import 'bootstrap/scss/helpers';

    @import "bootstrap/scss/utilities/api";

    @import "node_modules/bootswatch/dist/vapor/bootswatch";

    body {
        background-repeat: no-repeat;
        background-color: shade-color(#173e98, 50%);
        background-image: linear-gradient(
            shade-color($body-bg, 10%) 0%,
            $body-bg 4%,
            $body-bg 12%,
            shade-color(#173e98, 50%) 100%
        );
    }

    #main {
        max-width: 600px;
        min-height: 100vh;
    }
</style>
