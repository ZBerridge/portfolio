<template>
    <div id="about" class="post-wrapper container-fluid fade-in bg-darkgrey">
        <div class="container">
            <div class="row">
                <div class="col-12 font-white" v-html="content">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "About",
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
                Axios.get('/wp-json/zb/v1/zb-post-slug?slug=about').then(response => {
                    this.content = response.data
                })
                    .catch( e => {
                        this.errors.push(e)
                    })
            }
        },
        mounted() {
            //this.darkenNav()
            this.loadContent()
        }
    }
</script>
