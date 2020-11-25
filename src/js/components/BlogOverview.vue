<template>
    <section id="blog-listing" class="py-5 post-wrapper container-fluid fade-in bg-white">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Recent Posts</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <!--<div class="col-12 font-black" v-html="content">
                </div>-->
                <blog-post v-for="post in posts" :key="post['ID']" :post="post"></blog-post>
            </div>
        </div>
    </section>
</template>

<script>
    import {navCloser} from '../mixins/navCloser'
    import {mediaChecker} from '../mixins/mediaChecker'
    import BlogPost from './BlogOverviewPost'
    import ApiCalls from '../api/apiServices'

    export default {
        name: "BlogOverview",
        mixins: [navCloser, mediaChecker],
        data () {
            return {
                posts: ''
            }
        },
        methods: {
            loadPosts(){
                ApiCalls.getPosts(10, 0)
                    .then(data => {
                        this.posts = data
                    }).catch(error => console.log(error))
            },
            loadPagination(){
                /* To be continued */
                console.log('...pagination under development')
            }
        },
        mounted() {
            this.closeNav()
            this.showBody()
            this.loadPosts()
            this.loadPagination()
        },
        components:{
            'blog-post' : BlogPost
        }
    }

</script>
