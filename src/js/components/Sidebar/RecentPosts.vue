<template>
    <li>
        <router-link
                :to="{ name: 'post', params: { slug: title }}"
                tag="h5">
            <a class="font-black">{{ title }}</a>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "RecentPosts",
        props: ['post'],
        data () {
            return {
                title: ''
            }
        },
        methods: {
            renderLink() {
                //console.log('recent post:...')
                //console.log(this.$props.post)
                this.title = this.$props.post['slug']
            }
        },
        mounted() {
            this.renderLink()
        }
    }
</script>
