<template>
  <div class="home">
     <h2>商品列表</h2>  
    <indexs class="main"></indexs>
  </div>
</template>

<script>
// @ is an alias to /src
import indexs from '@/views/home/index.vue'

export default {
  name: 'home',
  components: {
    indexs
  }
}
</script>
<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  h2{
    padding-bottom: 20px;
  }
  .main{
    flex: 1;
    overflow: auto;
  }
}
</style>
