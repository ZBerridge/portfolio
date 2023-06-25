<script setup>
import ParticleController from '../../scripts/particleBackground'
import { onMounted } from 'vue'

onMounted(() => {
    ParticleController.particleController()
})
</script>
<template>
    <div class="particle-wrapper">
        <canvas id="particles-canvas" class="canvas_home_banner"></canvas>
    </div>
</template>