<template>
    <section id="blog-post" class="py-5 post-wrapper container-fluid fade-in bg-white">
        <post-title :title="title"></post-title>
        <div class="container">
            <div class="row">
                <div class="col-12 font-black" v-html="content">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import {navCloser} from '../mixins/navCloser'
    import PostTitle from './BlogPostTitle'

    export default {
        name: "BlogPost",
        mixins: [navCloser],
        props: {
          slug: {
              required: true
          }
        },
        data () {
            return {
                content: '',
                title: '',
                slug: '',
                errors: Array()
            }
        },
        methods: {
            loadPost(){
                console.log(this.$route);
                console.log(this.$route.params);
                this.slug = this.$route.params.slug;
                Axios.get('https://api.zberridge.com/wp-json/zb/v1/zb-post?slug=' + this.slug + '&full=true').then(response => {
                    this.title = response.data['post_title']
                    console.log(response.data)
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
            'post-title': PostTitle
        }

    }
</script>
