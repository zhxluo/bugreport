<template>
<div>
    <el-col :span="24">
    <el-menu :router="rout" theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/user/foo">/user/foo</router-link></el-menu-item>
      <el-menu-item index="1"><router-link to="/user/foo/profile">/user/foo/profile</router-link></el-menu-item>
      <el-menu-item index="1"><router-link to="/user/foo/posts">/user/foo/posts</router-link></el-menu-item>
    </el-menu>
    </el-col>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        userName: 'hello',
        userAvatar: '',
        rout: true
      }
    },
    methods: {
      logout () {
        var _this = this
        this.$confirm('确认退出吗?', '提示', {
          // type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('access-user')
          _this.$router.push('/login')
        }).catch(() => {
        })
      }
    },
    mounted () {
      var user = sessionStorage.getItem('access-user')
      if (user) {
        user = JSON.parse(user)
        this.sysUserName = user.name || ''
      }
    }
  }
</script>
