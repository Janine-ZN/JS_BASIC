/**
 * Created by web-01 on 2018/8/16.
 */
// Number对象
// 创建Number对象
var num = 100;
var num1 = new Number(100);
var num2 = new Number(3.14);

var num3 = new Number("abc"); // NaN 把值转成为数值型
var num4 = Number("150a");
var num5 = Number("105.5");

// 计算机存储的最大值和最小值
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);  // 5e-324

// 固定几个小数
console.log((0.1+0.2).toFixed(4));


// Boolean类型
var bool = true;
var bool1 = new Boolean(100);
var bool2 = new Boolean(0); // NaN undefined "" null
var bool3 = new Boolean("hello");
var bool4 = Boolean(5);
var bool5 = !!100;  // !!将数据转为boolean型
console.log(bool5);





