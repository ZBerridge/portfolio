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
                    <div class="recent-posts sidebar">
                        <h3>Recent Posts</h3>
                        <ul>
                            <post-sidebar v-for="post in posts" :key="post['ID']" :post="post"></post-sidebar>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {navCloser} from '../../mixins/navCloser'
    import PostTitle from './BlogPostTitle'
    import PostDate from './BlogPostDate'
    import PostContent from './BlogPostContent'
    import ApiCalls from '../../api/apiServices'
    import RecentPosts from '../Sidebar/RecentPosts'

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
                posts: ''
            }
        },
        methods: {
            loadPost(){
                console.log(this.$route.params.slug)
                let callResult;
                ApiCalls.getPost(this.$route.params.slug)
                    .then(data => {
                        callResult = data
                        if (callResult != null) {
                            this.post.title = callResult.post_title
                            this.post.content = callResult.post_content
                            this.post.image_url = callResult.featured_image_url
                            this.post.date = callResult.post_date
                        } else {
                            console.log(callResult.data.errors)
                        }
                    }).catch(error => console.log(error))
            },
            loadRecents(){
                ApiCalls.getPosts(10, 0)
                    .then(data => {
                        this.posts = data
                    }).catch(error => console.log(error))
            }
        },
        mounted() {
            this.closeNav()
            this.loadPost()
            this.loadRecents()

        },
        components: {
            'post-title': PostTitle,
            'post-content': PostContent,
            'post-date': PostDate,
            'post-sidebar': RecentPosts
        }

    }
</script>
