<template>
        <div class="text-left font-black page-content">
            <p v-html="content"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageContent",
        props: ['content']
    }
</script>

