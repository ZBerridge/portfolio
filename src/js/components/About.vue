<template>
    <section id="about" class="py-5 page-wrapper fade-in bg-white">
        <page-banner :title="post.title" :img_url="post.image_url"></page-banner>
        <div class="container mt-5">
            <page-content :content="post.content"></page-content>
            <page-sites></page-sites>
        </div>
    </section>
</template>

<script>
    import {navCloser} from '../mixins/navCloser'
    import {mediaChecker} from '../mixins/mediaChecker'
    import ApiCalls from '../api/apiServices'
    import PageBanner from './Page/PageBanner'
    import PageContent from './Page/PageContent'
    import PageSites from './Page/PageSites'

    export default {
        name: "About",
        mixins: [navCloser, mediaChecker],
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
            this.showBody()
            this.loadContent()
        },
        components: {
            'page-banner': PageBanner,
            'page-content': PageContent,
            'page-sites': PageSites
        }
    }
</script>
