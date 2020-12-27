<template>
    <div>
        <Article article="./about/about-blog.md"/>
        <Article article="./about/about-me.md"/>
    </div>
    
</template>

<script>
import Article from "@/components/Article"
export default {
    name: "Memo",
    components: {
        Article,
    },
    props: {
    },
    data() {
        return {
            
        }
    },
    methods: {

    },
}
</script>

<style scoped>

</style>
