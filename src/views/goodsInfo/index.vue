<template>
    <div class="main">
        <h2 @click="$router.go(-1)">{{list.title}}</h2>
        <div class="box">
            <div class="top">
                <img :src="list.img" alt="">
            </div>
            <div class="商品详情">
                {{ list.info }}
            </div>
            <div>
                剩余数量<span>{{list.num.number}}</span>
            </div>
        </div>
        <button class="fot" @click="addCar(list)" :disabled = "listLength == 0">
            加入购物车( {{userCar}} )    
        </button>
    </div>
</template>
<script>
import { mapState , mapActions } from "vuex";
var that ;
export default {
    data () {
        return {
            img:"",
            info:"",
            title:"",
            num:""
        }
    },
    computed: {
        ...mapState({
            list: state =>{
                return state.car.list.find(ele =>{
                    return ele.id == that.$route.params.id
                })
            },
            listLength:state =>{
                var a = state.car.list.find(ele =>{
                    return ele.id == that.$route.params.id
                }).num.number;
                return a
            },
            userCar:state => state.car.userCar.reduce(function(olds,news){
                return parseInt(olds) + parseInt(news.num)
            },0)
        })
    },
    methods: {
        addCar(val){
            var num = 1;
            var id = this.$route.params.id;
            this.$store.commit("car/addCar", { id , num , val});
        }
    },
    created () {
        that = this;
        //console.log(this.$store.getters["car/getInfo"](this.$route.params.id));
        // var info = this.$store.getters["car/getInfo"](this.$route.params.id)
        // this.img = info.img;
        // this.info = info.info;
        // this.title = info.title;
        // this.num = info.num.number;
    }
}
</script>
<style lang="scss" scoped>
h2{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    background: url(~@/assets/back.png) no-repeat left center;
}
.main{
    height: 100%;
    display: flex;
    flex-direction: column;
    .box{
        flex: 1;
        width: 90%;
        margin: 0 auto;
        span{
            color: red;
            font-weight: bold;
        }
    }
    .fot{
        padding: 20px 0;
        
        outline: none;
        border: none;
        border-top: 1px solid #ccc;
        background: transparent;
    }
}
</style>
