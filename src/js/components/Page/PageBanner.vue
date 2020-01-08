<template>
    <div class="container-fluid px-0 my-0 page-banner">
        <div class="row align-items-end mx-0">
            <div class="col-12 px-0">
                <img class="page-banner-bg" v-bind:src="img_url" />
                <div class="col-8 col-md-6 page-title bg-black py-3 pl-3 pl-md-5" >
                    <h2 class="font-white">{{ title }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageBanner",
        props: ['title', 'img_url']
    }
</script>
