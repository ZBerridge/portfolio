<script setup>

defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="post-card fade-in my-5 mx-3 mx-sm-0 row">
        <div class="post-thumb cl-xs-12 col-md-4">
            <div class="post-thumb-inner-wrap d-flex justify-content-center align-items-center" v-html="post.featured_image"></div>
        </div>
        <div class="post-snip col-xs-12 col-md-8">
            <div class="col-xs-12 post-title py-2">
                <h4 class="font-black">
                    <router-link
                            :to="{ name: 'post', params: { slug: post.slug }}">
                        {{ post.slug }}
                    </router-link>
                </h4>
                <span class="font-black post-date">{{ post.post_date }}</span>
            </div>
            <div class="col-xs-12 post-excerpt">
                <p>{{ post.post_excerpt }}...</p>
            </div>
        </div>
    </div>
</template>