<template>
    <div class="container-fluid px-0 my-0 page-banner">
        <div class="row align-items-end mx-0">
            <div class="col-12 px-0">
                <img class="page-banner-bg" v-bind:src="img_url" />
                <div class="container">
                    <div class="slide-outer row">
                        <div class="col-8 slide-left-wrapper py-4 pl-4 pl-3 pl-md-5" >
                            <div class="slide-content pl-2 h-100 d-flex align-items-center">
                                <h2 class="font-white my-0">{{ title }}</h2>
                            </div>
                        </div>
                    </div>
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
