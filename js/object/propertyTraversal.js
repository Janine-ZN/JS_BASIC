/**
 * Created by web-01 on 2018/8/13.
 */
// 遍历属性
var dog = {
    name:"大黄",
    color:"yellow",
    type:"中华田园犬",
    age:2
}

// in 前声明的变量表示所遍历的属性
// in 后表示要遍历的对象
for(var key in dog){
    console.log(key + "----" +dog[key]);
}


var car = {
    brand :"兰博基尼",
    type:"C1/C2",
    color:"red",
    country:"法国"
}
for(var i in car){
    console.log("兰博基尼的属性：" + car[i]);
}


