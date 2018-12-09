/**
 * Created by web-01 on 2018/8/14.
 */
// 关联数组
var arr = [];
arr["name"] = "tom";
arr["age"] = 18;
arr["gender"] = "男";
arr["salary"] = 10000;
// 使用 for-in 来遍历关联数组
for(var key in arr){
    // key 表示要遍历的下标
    console.log(key +" ---- "+arr[key]);
}




















