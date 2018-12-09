/**
 * Created by web-01 on 2018/8/14.
 */
// 1.原始数据类型的存储方式
var a = 1;
var b = a;
b = 2;
console.log(b);
console.log(a);

// 2. 引用类型的存储方式
var person1 = {
    name : "tom",
    age : 20,
    gender: "男",
}

// 把person1变量中的值赋给person2
var person2 = person1;
// 修改person1对象中的name属性
person1.name = "jerry";
console.log(person2);
person2.age = 18;
console.log(person1);














