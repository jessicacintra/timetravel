<template>
    <img :src="url" :title="title" :alt="alt" :width="width" :height="height" />
</template>

<script>
    export default {
        props: ['url', 'title', 'alt', 'width', 'height']
    }
</script>

<style>
    img{
        max-width: 100%;
    }
</style>

