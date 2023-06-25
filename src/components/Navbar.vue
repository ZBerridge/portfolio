<script>
</script>
<template>
    <div class="nav-wrap fixed-top">
        <div class="d-flex justify-content-end nav-wrap-inner">
            <button class="navbar-toggle-btn" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <div class="navbar-toggler-icon hamburger-icon">
                    <span class="bar bar1"></span>
                    <span class="bar bar2"></span>
                    <span class="bar bar3"></span>
                    <span class="bar bar4"></span>
                </div>
            </button>
            <div class="nav-menu" id="navbarNav">
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
    </div>
</template>