/**
 * Created by web-01 on 2018/8/10.
 */
function sum(a,b) {
    // 形参本质上就是一个局部变量
    var sum = 0;
    for(var i = a;i <= b;i++){
        sum += i;
    }
    console.log("sum = "+sum);
}
// 1. 传入两个参数：如果实参数量大于形参的数量，结果没有任何变化
sum(2,45);

// 2. 传入一个参数：如个形参的数量大于实参的数量，未赋值的形参结果为 undefined
var res = sum(1);
console.log("输出NaN：" + res);