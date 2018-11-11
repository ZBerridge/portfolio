<template>
    <section id="bio" class="pb-4 pt-4">
        <div class="container">
            <div class="row">
                <bio-image></bio-image>
                <bio-details></bio-details>
            </div>
        </div>
    </section>
</template>
<script>
    import BioPic from './BioPic'
    import BioDetails from './BioDetails'
    export default {
        name: "BioSection",
        components: {
            'bio-image' : BioPic,
            'bio-details' : BioDetails
        },
    }
</script>