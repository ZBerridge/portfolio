<template>
    <div class="container pt-5 pb-3">
        <div class="row">
            <div class="col-12 text-left font-black post-date">
                <h3 v-html="date"></h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPostDate",
        props: ['date']
    }
</script>
