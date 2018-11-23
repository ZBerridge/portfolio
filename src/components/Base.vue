<template>
    <div class="container-fluid home-container">
        <navbar-component></navbar-component>
        <router-view :home="home"></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import Footer from './Footer'
    export default {
        name: "Base",
        components: {
            'navbar-component' : Navbar,
            'footer-component' : Footer
        }
    }
</script>
