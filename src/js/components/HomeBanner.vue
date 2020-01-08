<template>
    <section id="banner" class="">
        <div class="container-fluid">
                <bio-banner></bio-banner>
        </div>
    </section>
</template>
<script>
    import BioBanner from './BioBanner'
    import BioThisPage from './BioThisPage'
    export default {
        name: "BioSection",
        components: {
            'bio-banner' : BioBanner
        },
    }
</script>
