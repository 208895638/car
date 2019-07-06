
import mock from "mockjs";
var mocks = mock.Random;
var list = []
for(var i = 0;i<10;i++){
    var price = mock.mock({
        "price|1-100": 100
      });
  var obj = {
      id:mocks.guid(),
      img:mocks.dataImage('200x100'),
      num:mock.mock({
          "number|1-5": 100
      }),
      title:mocks.ctitle(),
      info:mocks.cparagraph(),
      ...price,
  };

  list.push(obj)
}


export default {
    state: { list , userCar:[] , total : 0},
    mutations: { 
        addCar(state,{id,num,val}){
            var exist = state.userCar.find(ele => ele.id == id);
            if(exist){
                exist.num = exist.num + num;
            }else{
                var obj = {
                    id ,
                    num : 1,
                    val,
                    isChecked:false
                }
                state.userCar.push(obj);
            };
            var old = state.list.find(ele => ele.id == id);
            old.num.number = old.num.number - num;
        },
        updateUserCar(state,val){
            state.userCar.forEach(ele => {
                ele.isChecked = val
            });
        }
    },
    actions: { },
    getters: { 
        getInfo: (state) => (id) => {
            var a = state.list.find(ele =>{
                 return   ele.id == id
                } 
                
            );
            return a
        },
        userCarNum:(state) => {
            var total = state.userCar.reduce(function(pre,next){
                if(next.isChecked ){
                    return pre = pre + next.num*next.val.price
                }
                return 0;
            },0)
            return total
        }
    },
    namespaced: true
  }