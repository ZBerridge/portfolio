<template>

    <div class="zb-nav-wrap fixed-top">
        <div class="row px-3 mx-0">
            <nav id="zb-nav" class="container navbar navbar-expand-lg my-3 px-1 px-md-4">
                <a class="navbar-brand" href="/">ZBerridge</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav text-right pt-2">
                        <router-link tag="li" to="/" class="nav-item" active-class="active">
                            <a class="nav-link">Home</a>
                        </router-link>
                        <router-link tag="li" to="/About" class="nav-item" active-class="active">
                            <a class="nav-link">About</a>
                        </router-link>
                        <router-link tag="li" to="/Othello" class="nav-item" active-class="active">
                            <a class="nav-link">Othello</a>
                        </router-link>
                        <router-link tag="li" to="/Posts" class="nav-item" active-class="active">
                            <a class="nav-link">Blog</a>
                        </router-link>
                        <router-link tag="li" to="/contact" class="nav-item" active-class="active">
                            <a class="nav-link">Contact</a>
                        </router-link>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return {
                isBlack: true,
                isClear: false
            }
        }
    }
</script>
