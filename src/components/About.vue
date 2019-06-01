<template>
    <section id="about" class="py-5 page-wrapper fade-in bg-white">
        <page-banner :title="post.title" :img_url="post.image_url"></page-banner>
        <page-content :content="post.content"></page-content>
    </section>
</template>

<script>
    import {navCloser} from '../mixins/navCloser'
    import ApiCalls from '../api/apiServices'
    import PageBanner from './Page/PageBanner'
    import PageContent from './Page/PageContent'

    export default {
        name: "About",
        mixins: [navCloser],
        data () {
            return {
                post: {
                    title: '',
                    content: '',
                    image_url: ''
                },
                errors: Array()
            }
        },
        methods: {
            loadContent(){
                /*Axios.get('https://api.zberridge.com/wp-json/zb/v1/zb-post?slug=About&full=true').then(response => {
                    this.content = response.data['post_content']
                })
                    .catch( e => {
                        this.errors.push(e)
                    })*/
                let callResult;
                ApiCalls.getPage("About")
                    .then(data => {
                        callResult = data
                        if (callResult != null) {
                            this.post.title = callResult.post_title
                            this.post.content = callResult.post_content
                            this.post.image_url = callResult.featured_image_url
                            this.post.date = callResult.post_date
                        } else {
                            console.log(callResult.data.errors)
                        }
                    }).catch(error => console.log(error))
            }
        },
        mounted() {
            this.closeNav()
            this.loadContent()
        },
        components: {
            'page-banner': PageBanner,
            'page-content': PageContent
        }
    }
</script>
