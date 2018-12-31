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
                Axios.get('/wp-json/zb/v1/zb-page?id=27').then(response => {
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
