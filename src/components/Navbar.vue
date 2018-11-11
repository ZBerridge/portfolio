<template>
    <!--<nav class="navbar navbar-expand-lg navbar-dark bg-black font-white">
        <a class="navbar-brand" href="#">ZBerridge</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#MainNav" aria-controls="MainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="MainNav">
            <ul class="nav justify-content-end">
                <router-link to="/" tag="li" class="nav-link">
                    <a>Home</a>
                </router-link>
                <router-link to="/game" tag="li" class="nav-link">
                    <a>Othello</a>
                </router-link>
            </ul>
        </div>
    </nav>-->
    <div class="container-fluid zb-nav-wrap fixed-top bg-light">
        <div class="row px-3">
            <nav id="zb-nav" class="container navbar navbar-expand-lg navbar-light  py-4 px-4">
                <a class="navbar-brand" href="#">ZBerridge</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav text-right pt-2">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Bio">Bio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>