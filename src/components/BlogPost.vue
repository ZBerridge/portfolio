<template>
    <section id="blog-post" class="py-5 post-wrapper container-fluid fade-in bg-white">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center post-title">
                    <h2 v-html="title"></h2>
                </div>
            </div>
        </div>
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
                Axios.get('/wp-json/zb/v1/zb-post?slug=' + this.slug + '&full=true').then(response => {
                    this.title = response.data
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
        }

    }
</script>
