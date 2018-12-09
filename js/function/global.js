/**
 * Created by web-01 on 2018/8/13.
 */
// 全局函数
// 1. 对一个URI进行编码
var uri = 'http://www.codeboy.com/?kw=戴尔&addr=中国';
console.log('uri:' + uri);
var res1 = encodeURI(uri);
console.log('res1:' + res1);
var res2 = decodeURI(uri);
console.log('res2' + res2);


// 2. isNaN 判断是不是 不是一个数
var num1 = "2a";
console.log(Number(num1));

console.log(isNaN(num1));


// 3. isFinite 检测是否为有限值
var num2 = 3333 * 7654;
console.log("num：" + num2);
var num3 = 1/0;// 结果是无限值
var res3 = isFinite(num3);
console.log(res3);


// 4.eval 执行字符串表达式的值
var a = 1;
var b = 3;
var res4 = eval('a+b');
console.log(res4);
var res5 = eval('2+3*5/6*8-13');
console.log(res5);


// var str = "1 < 2";
// console.log(str);
// console.log(eval(str));

function myFunc(){
    var x;
    console.log(x);
    x = "100";
    console.log(x);
}
myFunc();