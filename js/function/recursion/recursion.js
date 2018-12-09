/**
 * Created by web-01 on 2018/8/10.
 */
// 递归——在函数内部调用自身
var i = 0;
function fn() {
    i++;
    // i = 1    i = 2   i = 3
    console.log("many years age"); // 1 2 3
    // 调用自身
    // 三次以内会调用自身，
    // 终止条件
    if(i < 3){
        fn();
    }
}
fn();
// 控制for循环三次，var i = 0;i < 3;i++

// 方法一：求和
function getSum(n) {
    // 当 n 的值是 1 的时候，返回 1 —— 终止递归
    if(n == 1){
        return 1;
    }
    return n + getSum(n-1);
}
var res = getSum(5);
console.log(res);

// 方法二：求和
// var i = 0,sum = 0;
// function getSum(n){
//
//     i++;
//     sum += i;
//     if(i < n){
//         getSum(n);
//     }
//     return sum;
// }
// var res = getSum(5);
// console.log(res);


// 阶乘
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        // arguments.callee() 访问当前函数的名称，在函数内部使用
        return num * arguments.callee(num-1);
    }
}
var anotherFactorial = factorial;
factorial = null ;
console.log(anotherFactorial(4));


function fibonacci(n) {
    if(n == 1 || n == 2 ){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var res = fibonacci(12);
console.log("res = " + res);


