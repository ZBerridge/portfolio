<template>
    <section id="blog-listing" class="py-5 post-wrapper container-fluid fade-in bg-white">
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
    export default {
        name: "BlogOverview",
        data () {
            return {
                content: '',
                errors: Array()
            }
        },
        methods: {
            darkenNav(){

            },
            loadContent(){
                Axios.get('/wp-json/zb/v1/zb-posts?count=10&skip=0').then(response => {
                    this.content = response.data
                })
                    .catch( e => {
                        this.errors.push(e)
                    })
            },
            closeNav(){
                let navToggle = document.querySelector('[data-target="#navbarNav"');
                navToggle.click();
            }

        },
        mounted() {
            //this.darkenNav()
            this.closeNav()
            this.loadContent()
        }
    }

</script>
