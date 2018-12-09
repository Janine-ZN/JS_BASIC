/**
 * Created by web-01 on 2018/8/14.
 */
// 数组的遍历
var arr = ["刘备","曹操","孙权","关羽"];
// 循环下标
for(var i = 0 ;i < arr.length;i++){
    console.log(arr[i]);
}

/////////////////// 创建 car 数组 //////////////////
var car = ["宝马","奔驰","奇瑞"];
car[car.length] = "兰博基尼";
car[car.length] = "奥迪";

for(var i = 0;i < car.length;i++){
    console.log(car[i]);
}

for(var key in car){
    // key 表示数组的下标
    console.log(key + " ----- " +car[key]);
}


