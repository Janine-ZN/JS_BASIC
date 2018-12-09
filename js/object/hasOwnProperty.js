/**
 * Created by web-01 on 2018/8/14.
 */
// 检测对象中是否含有某个属性
var person = {
    name :"Janine",
    age:"18",
    gender: "girl",
    salary:null
}
// 1. 内置的预定义成员方法
var res1 = person.hasOwnProperty("age");
if(res1 == true){
    console.log("is right");
}
console.log(res1);

// 2. 用 in 关键字
var res2 = "gender" in person;
console.log(res2);

// 3. 和 undefined 进行对比
// 如果是 false ，表示值是 存在的
// 如果是 true ，表示值是 不存在的
// undefined -> false null -> false  0  NaN  ''
var res3 = person.gender == undefined;
console.log(res3);

var res4 = person.salary === undefined;
console.log(res4);

var res5 = person.salary === undefined;
console.log(res5);

