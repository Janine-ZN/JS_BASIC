/**
 * Created by web-01 on 2018/8/10.
 */
// 变量提升
var a;
console.log("a：" + a);    // undefined
// var a = 1;
a = 1;


function fn() {
    console.log("b：" + b);  // undefined
    var b = 2;
    console.log("b= " + b);
}
fn();


var num2 = 10;
function parameter2(num2) {  // 形参负责占位，局部变量
    // num2 为局部变量
    num2 = num2 + 10;
    console.log("num2：" + num2);
    // return num2;
}
parameter2(num2);          // 把num2的值赋值一份，以实参形式传递给形参
console.log("num2= " + num2);


// 参数的作用域：参数属于局部变量
function parameter1(num1) {
    num1 = num1 + 2;
    console.log("num1：" + num1);
}
parameter1(3);
console.log("num1= "+ num1);  // ReferenceError: num1 is not defined
