<template>

    <div class="container-fluid zb-nav-wrap fixed-top bg-clear font-white">
        <div class="row px-3">
            <nav id="zb-nav" class="container navbar navbar-expand-lg py-4 px-4">
                <a class="navbar-brand" href="/">ZBerridge</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav text-right pt-2">
                        <router-link tag="li" to="/" class="nav-item" active-class="active">
                            <a class="nav-link">Home</a>
                        </router-link>
                        <li class="nav-item">
                            <a class="nav-link" href="#Bio">Bio</a>
                        </li>
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
        name: "Navbar"
    }
</script>
