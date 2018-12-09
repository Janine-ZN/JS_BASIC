/**
 * Created by web-01 on 2018/8/13.
 */
// 声明函数的方式 —— 匿名函数
// 1. 把一个匿名函数放入到变量中
var fn = function () {
    console.log("hello world");
}
// 如何调用匿名函数 —— 变量名称()
// 函数声明的调用 —— 函数名称()
fn();


// 2. 传递的参数 —— 传递函数名称(了解)
function getSum(num1,num2) {
    // num1 = num;
    // num2 = num;
    return num1() + num2();
    // 形参对应的实参是num
    // num() + num()
}
function num(){
    return 5;
}

// 调用getSum，传递的参数是函数名称
var res1 = getSum(num,num);
console.log("res1的值：" + res1);


// 2. 传递匿名函数(必须明白)
// 匿名函数的自执行
(function () {
    console.log("hello Janine");
})();

var res2 = getSum(
    function () { return 1;},   // 回调函数
    function () {return 2;}
);
console.log("res2的值：" + res2);

