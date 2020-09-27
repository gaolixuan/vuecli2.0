<template>
<div id="app">
    <router-link to="/home" tag="button" replace="" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace="" active-class="active">关于</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18}}">档案</router-link>
    <keep-alive exclude="Profile">
        <router-view></router-view>
    </keep-alive>
    <button v-on:click="homeClick">首页按钮</button>
    <button v-on:click="aboutClick"> 关于按钮

    </button>
    <button v-on:click="useClick">
        用户
    </button>
    <button v-on:click="profileClick">
        档案
    </button>

</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            userId: 'lisi'
        }
    },
    methods: {
        homeClick() {
            this.$router.replace('./home')
        },
        aboutClick() {
            this.$router.replace('./about')
        },
        useClick() {
            this.$router.push('/user/' + this.userId)
        },
        profileClick() {
            this.$router.push({
                path: '/profile',
                query: {
                    name: 'why',
                    age: 18
                }
            })
        }
    }
}
</script>

<style>
.active {
    color: red;
}
</style>
