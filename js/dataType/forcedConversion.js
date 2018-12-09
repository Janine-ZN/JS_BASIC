/**
 * Created by web-01 on 2018/8/10.
 */
// 数据类型转换

// 1. 隐式转换 //////////////////////////////////////////////////////////////////////////////////////
var a = 10 + 'kb';        // 10kb
console.log("a 的类型:" + typeof(a) + "," + a); // string

var b = 1 + true;        // 2
console.log("b 的类型:" + typeof(b) + "," + b); // number


var d = true + 'abc';    // trueabc
console.log("d 的类型:" + typeof(d) + "," + d);  // string
// 其他类型和 string 类型连接，基本上转成字符串

var c = true + false;   // 1
console.log("c 的类型:" + typeof(c)); // number


var num1=3, num2='st', num3 = true;
console.log(num1 + num2 + num3);  // '3sttrue'
console.log(num2 + num3 + num1);  // 'sttrue3'
console.log(num3 + num2 + num1);  // 'truest3'
console.log(num1 + num3 + num2);  // '4st'   先计算 num1 + num2 的4，再 4 + num2

// 1. 非Number类型的值进行运算时,会将这些值转换为Number然后在运算
var res0 = true + 100;
console.log("res0：" + res0);   // 101

var res1 =true + false;
console.log("res1：" + res1);  // 1

var res2 = null + 10;
console.log("res2：" + res2);  // 10

// 2. 任何值和NaN做运算都得NaN
var res3 = 100 + NaN;
console.log("res3：" + res3);  // NaN

// 3. 任何的值和字符串做加法运算，都会先转换为字符串，然后再和字符串做拼串的操作************/
var res4 = 100 + '123';
console.log("res4：" + typeof(res4));   // '100123'

var res5 = 100 + 'false';
console.log("res5：" + res5);



// 2. 强制转换 //////////////////////////////////////////////////////////////////////////////////////
// 2.1 强制转换成整型
var num1 = '1hello'
console.log(parseInt(num1));

// 2.2 强制转换成浮点型
var num2 = 'a2m3.55a';
console.log(parseFloat(num2));  // NaN

// 2.3 强制转换成数值型
var num3 = '25.55';
var res = Number(num3);
console.log(typeof(res));
console.log(Number(num3));

// 2.4 转换成字符串型
var num4 = 20;
var res = num4.toString();
console.log(typeof(res));








