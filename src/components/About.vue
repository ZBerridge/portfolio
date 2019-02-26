<template>
    <section id="about" class="py-5 post-wrapper container-fluid fade-in bg-darkgrey">
        <div class="container">
            <div class="row">
                <div class="col-12 font-white" v-html="content">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import {navCloser} from '../mixins/navCloser'

    export default {
        name: "About",
        mixins: [navCloser],
        data () {
            return {
                content: '',
                errors: Array()
            }
        },
        methods: {
            loadContent(){
                Axios.get('https://api.zberridge.com/wp-json/zb/v1/zb-post?slug=About&full=true').then(response => {
                    this.content = response.data['post_content']
                })
                    .catch( e => {
                        this.errors.push(e)
                    })
            }
        },
        mounted() {
            this.closeNav()
            this.loadContent()
        }
    }
</script>
