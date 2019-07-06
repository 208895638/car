<template>
    <div class="main">   
       
        <ul>
            <router-link :to="`/info/${item.id}`"  v-for="item in list " :key="item.id" tag="li">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapState({
            list: state => state.car.list
        })
    },
    created () {
        ///console.log(this.$store.state.car.list)
        // console.log(this.mock);
        // const _this = this,mock = _this.mock.Random;
        // for(var i = 0;i<10;i++){
        //     var obj = {
        //         id:mock.guid(),
        //         img:mock.dataImage('200x100'),
        //         num:_this.mock.mock({
        //             "number|1-100": 100
        //         }),
        //         title:mock.ctitle(),
        //         info:mock.cparagraph()
        //     };
        //     _this.list.push(obj)
        // }
    }
}
</script>
<style lang="scss" scoped>
.main{
    ul{
        li{
            display: flex;
            align-items: center;
            padding: 0 40px;
            margin: 20px 0;
            img{
                height: 34px;
                margin-right: 10px;
            }
        }
    }
}
</style>


