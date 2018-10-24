<template>
    <div class="container-fluid home-container">
        <router-view :home="home"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Base"
    }
</script>
