<template>
    <div>
        <Article article="/top/top.md"/>
        <Article article="/top/recent.md"/>
        <Article article="/top/github.md"/>
    </div>
</template>

<script>
import Article from "@/components/Article"

export default {
    name: "Top",
    components: {
        Article,
    },
    props: {
    },
    methods: {

    },
}
</script>

<style scoped>

</style>
