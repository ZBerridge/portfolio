<template>
    <div class="container-fluid home-container">
        <navbar-component></navbar-component>
        <main class="col-12 bd-content px-0" role="main">
            <router-view :home="home"></router-view>
            <footer-component></footer-component>
        </main>
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
