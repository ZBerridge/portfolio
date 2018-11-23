<template>
    <section id="bio" class="pb-4 pt-4">
        <div class="container">
                <!--<bio-image></bio-image>-->
                <bio-details></bio-details>
                <bio-thispage></bio-thispage>
        </div>
    </section>
</template>
<script>
    import BioPic from './BioPic'
    import BioDetails from './BioDetails'
    import BioThisPage from './BioThisPage'
    export default {
        name: "BioSection",
        components: {
            'bio-image' : BioPic,
            'bio-details' : BioDetails,
            'bio-thispage' : BioThisPage
        },
    }
</script>
