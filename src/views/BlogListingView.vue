<script setup>
import ApiCalls from '../api/apiServices'
import BlogPostListingItem from '../components/BlogPostListingItem.vue'
import { ref, onMounted } from 'vue'

let posts = ref(null)

onMounted(() => {
    ApiCalls.getPosts(10, 0)
        .then(data => {
            posts.value = data
        }).catch(error => console.log(error))
})
</script>
<template>
    <section id="blog-listing" class="py-5 post-wrapper container-fluid fade-in">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Recent Posts</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <BlogPostListingItem v-for="post in posts" :key="post.id" :post="post"></BlogPostListingItem>
            </div>
        </div>
    </section>
</template>
