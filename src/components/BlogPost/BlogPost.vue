<template>
    <section id="blog-post" class="py-5 post-wrapper container-fluid fade-in bg-white">
        <post-title :title="post.title" :img_url="post.image_url"></post-title>
        <div class="container py-3">
            <div class="row">
                <post-date :date="post.date"></post-date>
            </div>
        </div>
        <div class="container py-3">
            <div class="row">
                <div class="col-12 col-md-7">
                    <post-content :content="post.content"></post-content>
                </div>
                <div class="col-12 col-md-5">
                    <post-sidebar></post-sidebar>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import {navCloser} from '../../mixins/navCloser'
    import {apiCall} from '../../mixins/apiCalls'
    import PostTitle from './BlogPostTitle'
    import PostDate from './BlogPostDate'
    import PostContent from './BlogPostContent'
    import PostSidebar from './BlogPostSidebar'

    export default {
        name: "BlogPost",
        mixins: [navCloser, apiCall],
        data () {
            return {
                post: {
                    title: '',
                    content: '',
                    image_url: '',
                    date: ''
                },
                errors: Array()
            }
        },
        methods: {
            loadPost(){
                let callResult;
                this.makeCall('https://api.zberridge.com/wp-json/zb/v1/zb-post?slug=', (this.$route.params.slug + '&full=true') ).then(
                    data => {
                        callResult = data
                        if (callResult != null) {
                            this.post.title = callResult.data.post_title
                            this.post.content = callResult.data.post_content
                            this.post.image_url = callResult.data.featured_image_url
                            this.post.date = callResult.data.post_date
                        } else {
                            console.log(callResult.data.errors)
                        }
                    })
            },
        },
        mounted() {
            this.closeNav()
            this.loadPost()
        },
        components: {
            'post-title': PostTitle,
            'post-content': PostContent,
            'post-date': PostDate,
            'post-sidebar': PostSidebar
        }

    }
</script>
