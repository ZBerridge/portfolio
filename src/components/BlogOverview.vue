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
    import Axios from 'axios'
    import {navCloser} from '../mixins/navCloser'
    import BlogPost from './BlogOverviewPost'
    export default {
        name: "BlogOverview",
        mixins: [navCloser],
        data () {
            return {
                content: '',
                errors: Array(),
                posts: ''
            }
        },
        methods: {
            loadContent(){
                Axios.get('https://api.zberridge.com/wp-json/zb/v1/zb-posts?count=10&skip=0&full=true').then(response => {
                    this.posts = response.data
                    //console.log(response.data)
                })
                    .catch( e => {
                        this.errors.push(e)
                    })
            },
            loadPagination(){
                Axios.get().then(response => {
                    //retrieve total count of posts, create pagination as needed
                }).catch( e => {
                    this.errors.push(e)
                })
            }
        },
        mounted() {
            this.closeNav()
            this.loadContent()
            this.loadPagination()
        },
        components:{
            'blog-post' : BlogPost
        }
    }

</script>
