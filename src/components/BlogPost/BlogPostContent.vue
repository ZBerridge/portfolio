<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 text-left font-black post-content" v-html="content">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPostContent",
        props: ['content']
    }
</script>
