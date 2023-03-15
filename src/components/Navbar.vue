<script>
</script>
<template>
    <div class="nav-wrap fixed-top">
        <div class="container">
            <div class="row px-3 mx-0">
                <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-white my-3 px-1 px-md-4">
                    <div class="container">
                        <a class="navbar-brand" href="/">ZBerridge</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/othello">Othello</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/bio">Bio</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/blog-listing">Blog</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>