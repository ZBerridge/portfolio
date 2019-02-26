<template>
    <section id="blog-post" class="py-5 post-wrapper container-fluid fade-in bg-white">
        <post-title :title="post.title" :img_url="post.image_url"></post-title>
        <post-date :date="post.date"></post-date>
        <post-content :content="post.content"></post-content>
    </section>
</template>

<script>
    import Axios from 'axios'
    import {navCloser} from '../../mixins/navCloser'
    import PostTitle from './BlogPostTitle'
    import PostDate from './BlogPostDate'
    import PostContent from './BlogPostContent'

    export default {
        name: "BlogPost",
        mixins: [navCloser],
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
                Axios.get('https://api.zberridge.com/wp-json/zb/v1/zb-post?slug=' + this.$route.params.slug + '&full=true').then(response => {
                    this.post.title = response.data.post_title
                    this.post.content = response.data.post_content
                    this.post.image_url = response.data.featured_image_url
                    this.post.date = response.data.post_date
                })
                    .catch( e=> {
                        this.errors.push(e)
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
            'post-date': PostDate
        }

    }
</script>
