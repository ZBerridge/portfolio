<template>
    <div class="container px-0 px-md-3 mb-0 my-0 my-md-3 post-banner">
        <div class="row align-items-end h-100 mx-0">
            <div class="col-12 px-0">
                <img class="post-banner-bg" v-bind:src="img_url" />
                <div class="col-12 col-md-8 text-center post-title bg-black py-3 pl-0 pl-md-5" >
                    <h2 class="font-white">{{ title }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPostTitle",
        props: ['title', 'img_url']
    }
</script>
