<template>
<div>
    <h2>我是Home</h2>
    <h1>{{message}}</h1>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            message: '你好',
            path: '/home/news'
        }
    },
    methods: {

    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    //这两个函数只有该组件被保持了状态使用了keep-alive时才有效
    activated() {
        this.$router.push(this.path);

    },
    deactivated() {

    },
    beforeRouteLeave(to, from, next) {
        this.path = this.$route.path;
        next()
    }
    // created() {
    //     console.log("created"),
    //         document.title = '首页'
    // },
    // mounted() {
    //     console.log("mounted")
    // },
    // updated() {
    //     console.log("updated")
    // }
};
</script>

<style>

</style>
