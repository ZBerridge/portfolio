<template>
    <div class="row">
        <div class="col-12" v-html="content">
        </div>
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
