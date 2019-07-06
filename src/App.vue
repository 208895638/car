<template>
  <div id="app" class="main">
    <div class="box">
      <router-view/>
    </div>
    
    <div class="footer" v-if="$route.meta.footerShow">
      <ul>
        <router-link to="/" tag="li" exact>首页</router-link>
        <router-link to="/car" tag="li" exact>购物车</router-link>
        <router-link to="/user" tag="li" exact>个人信息</router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style lang="scss" scoped>
.r-active{
  color: red;
}
.main{
  height: 100%;
  display: flex;
  flex-direction: column;
  .box{
    flex: 1;
    overflow: auto;
  }
}
.footer{
  ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #ccc;
    li{
      padding:20px 0;
    }
  }
}
</style>
