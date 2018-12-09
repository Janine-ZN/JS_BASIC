/**
 * Created by web-01 on 2018/8/10.
 */
// 全局作用域下声明的函数 —— 全局函数
fn();
function fn() {
    console.log(123);
}

function getAvg(){
    function getSum(num1,num2){
        return num1 + num2;
    }
    return getSum(10,18)/2;
}

var res = getAvg();
console.log(res);


// 函数中变量的查找规则
// -------- 0级作用域 -------
var num = 0;
function fn1(){
    // -------- 1级作用域 -------
    var num = 1;
    function fn2(){
        // -------- 2级作用域 -------
        var num = 2;
        function fn3(){
            // -------- 3级作用域 -------
            // var num = 3;
            console.log(num);
        }
        fn3();
    }
    fn2();
}
fn1();



