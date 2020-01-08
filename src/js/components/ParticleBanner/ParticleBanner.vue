<template>
    <div class="row particle-container mx-0">
        <canvas id="particles-canvas"></canvas>
        <bio-banner-text></bio-banner-text>
    </div>
</template>
<script>
    import BioBannerText from '../BioBannerText'
    import ParticleController from '../../scripts/particles'
    export default {
        name: "ParticleBanner",
        methods: {
            startParticles() {
                ParticleController.particleController()
            }
        },
        components: {
            'bio-banner-text' : BioBannerText,
        },
        mounted() {
            this.startParticles()
        }
    }
</script>