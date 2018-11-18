<template>
    <div class="col-xs-12 col-md-6" v-html="content">
    </div>
</template>
<script>
    import Axios from 'axios'
    export default {
        name: "BioDetails",
        data () {
            return {
                content: '',
                errors: Array()
            }
        },
        methods: {
            loadContent(){
                Axios.get('/wp-json/zb/v1/zb-post-slug?slug=biodetails').then(response => {
                    this.content = response.data
                })
                .catch( e => {
                    this.errors.push(e)
                })
            }
        },
        mounted() {
            this.loadContent()
        }
    }
</script>
