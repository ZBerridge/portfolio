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
        name: "BlogOverview",
        mixins: [navCloser],
        data () {
            return {
                content: '',
                errors: Array()
            }
        },
        methods: {
            loadContent(){
                Axios.get('/wp-json/zb/v1/zb-posts?count=10&skip=0').then(response => {
                    this.content = response.data
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
        }
    }

</script>
