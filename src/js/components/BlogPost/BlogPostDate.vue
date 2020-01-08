<template>
    <div class="col-12 text-left font-black post-date">
        <h3 v-html="date"></h3>
    </div>
</template>

<script>
    export default {
        name: "BlogPostDate",
        props: ['date']
    }
</script>
