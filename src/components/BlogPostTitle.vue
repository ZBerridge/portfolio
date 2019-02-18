<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center post-title">
                <h2 v-html="title"></h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPostTitle",
        props: ['title'],
        data() {
            return {
                title: ''
            }
        },
        methods: {
            renderTitle() {
                this.title = this.$props['title']
                console.log(this.$props['title'])
            }
        },
        mounted() {
            this.renderTitle();
        }
    }
</script>

<style scoped>

</style>
