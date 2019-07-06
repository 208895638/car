<template>
    <div class="box">
        <div v-if="userCar.length == 0">
            暂时没有上去 去首页购买吧
        </div>
        <div v-else class="main">
            <div class="top">
                <ul>
                    <li v-for="item in userCar" :key="item.id">
                        <input type="checkbox" v-model="item.isChecked"> 
                        <div class="c">{{ item.val.title }} <span>单价{{item.val.price}}元</span> </div> 
                        <div class="r">
                            <button @click="lower(item.id,item.val)" :disabled="item.num == 0">-</button>
                            <div>{{ item.num }}</div>
                            <button @click="add(item.id,item.val)" :disabled="item.val.num.number == 0">+</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bot">
                <div >
                    <input type="checkbox" @click="selectAll"  :checked="isSelectAll"><div>全选</div>
                </div>
                <div>
                    总价{{userCarNum}}元
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { mapState , mapMutations ,mapGetters} from "vuex";
export default {
    data () {
        return {
            selects :this.isSelectAll
        }
    },
    computed: {
        ...mapState({
            userCar:state => state.car.userCar,
            listLength:state =>{
                var a = state.car.list.find(ele =>{
                    return ele.id == that.$route.params.id
                }).num.number;
                return a
            },
            isSelectAll :state => {
                        if(state.car.userCar.length == 0){
                            return false
                        }else{
                            return state.car.userCar.every(ele => ele.isChecked == true)
                        }
                        
                    }
        }),
        userCarNum(){
            console.log(this.$store.getters["car/userCarNum"],6666)
            return this.$store.getters["car/userCarNum"]
        }
        
    },
    methods: {
        selectAll(){
            this.$store.commit("car/updateUserCar",!this.isSelectAll)
            
            console.log(this.isSelectAll)
        },
        lower(id,val){
            var num = -1;
            this.$store.commit("car/addCar", { id , num , val});
        },
        add(id,val){
            var num = 1;
            this.$store.commit("car/addCar", { id , num , val});
        }
    },
    created () {
        console.log(this.userCar);
    }
}
</script>
<style lang="scss" scoped>
.box{
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        height: 100%;
    display: flex;
    flex-direction: column;
    }
    .top{
        flex: 1;
        overflow: auto;
        padding: 20px 0;
        ul{
            width: 90%;
            margin: 0 auto;
            li{
                display: flex;
                align-items: center;
                padding: 20px 0;
                border-bottom: 1px solid #ccc;
                .c{
                    flex: 1;
                    span{
                        color: red;
                    }
                }
                .r{
                    display: flex;
                    align-items: center;
                    button{
                        width: 20px;
                        height: 20px;
                        margin: 0 10px;
                    }
                }
            }
        }
    }
    .bot{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
        justify-content: space-between;
        >div{
            display: flex;
            align-items: center;
        }
    }
}
</style>

