<template>
    <div class="zb-post-card fade-in my-5 mx-3 mx-sm-0 row">
        <div class="zb-post-thumb col-xs-12 col-md-4">
            <div class="zb-post-thumb-wrap d-flex justify-content-center align-items-center" v-html="featured_image"></div>
        </div>
        <div class="zb-post-snip col-xs-12 col-md-8">
            <div class="col-xs-12 zb-post-title py-2">
                <router-link
                        :to="'/post/' + title"
                        tag="h4">
                    <a class="font-black">{{ title }}</a>
                </router-link>
                <span class="font-black font-weight-bold">{{ post_date }}</span>
            </div>
            <div class="col-xs-12 zb-post-excerpt">
                <p>{{ excerpt }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogOverviewPost",
        props: ['post'],
        data () {
            return {
                excerpt: '',
                title: '',
                post_date: '',
                featured_image: ''
            }
        },
        methods: {
            renderPost() {
                this.excerpt = this.$props.post['post_excerpt']
                this.title = this.$props.post['slug']
                this.post_date = this.$props.post['post_date']
                this.featured_image = this.$props.post['featured_image']
            }
        },
        mounted(){
            this.renderPost()
        }

    }
</script>
