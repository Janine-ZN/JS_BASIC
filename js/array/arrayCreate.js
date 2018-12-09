/**
 * Created by web-01 on 2018/8/14.
 */
// 数组的创建
// 1. 使用数组直接量
var arr1 = [{color:"red",size:"5.0"},"tom",'jerry',20,true,undefined,null];
console.log(arr1);

// 2. 内置构造函数
var arr2 = new Array();
console.log(arr2); // 输出空数组 []

var arr3 = new Array("tom",'jerry',20,true,undefined,null);
console.log(arr3);

var arr4 = new Array(4);
console.log(arr4);

var country = new Array("中","英","法","德","美");

var person = new Array({
    name :"张三",
    gender:"女",
    age:20
},{
    name :"王五",
    gender:"男",
    age:21
},{
    name :"李四",
    gender:"男",
    age:22
});
console.log(country);
console.log(person)




