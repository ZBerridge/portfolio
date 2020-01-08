<template>
    <div class="row img-background mx-0">
        <bio-banner-text></bio-banner-text>
    </div>
</template>
<script>
    import BioBannerText from './BioBannerText'
    export default {
        name: "BioPic",
        components: {
            'bio-banner-text' : BioBannerText,
        }
    }
</script>
