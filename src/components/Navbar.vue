<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black font-white">
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
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>