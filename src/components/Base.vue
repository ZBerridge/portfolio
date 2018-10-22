<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to="/" tag="li" exact active-class="active" class="nav-item">
                    <a>Home</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Base"
    }
</script>
