<template>
    <div class="container-fluid home-container">
        <navbar-component></navbar-component>
        <router-view :home="home"></router-view>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    export default {
        name: "Base",
        components: {
            'navbar-component' : Navbar
        }
    }
</script>
