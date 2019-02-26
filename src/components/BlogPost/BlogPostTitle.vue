<template>
    <div class="container-fluid px-0 post-banner" v-bind:style="{ backgroundImage: 'url(' + img_url + ')' }">
        <div class="row align-items-end h-100 mx-0">
            <div class="col-12 px-0">
                <div class="col-12 text-center post-title bg-transluscent py-3" >
                    <h2 class="font-black">{{ title }}</h2>
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
