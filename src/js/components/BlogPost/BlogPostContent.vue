<template>
    <div class="text-left font-black post-content">
        <p v-html="content"></p>
    </div>
</template>

<script>
    export default {
        name: "BlogPostContent",
        props: ['content']
    }
</script>
