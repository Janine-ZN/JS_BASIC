/**
 * Created by web-01 on 2018/8/10.
 */
// 1. 声明一个变量，存储整数
var a = 7;
//八进制，十六进制
// var b = 012;
var c = 0X10;

// 2. 浮点型
var num1 = 1.2;
//var num2 = 1888.99;
var num2 = 1.88899e-3;
var num3 = 3.4E3;// E3 3.4 * 10*10*10
var num3 = 3.4E-3;// E-3 3.4 * 0.1*0.1*0.1
console.log(num2);

// 3. 字符串类型
var name = 'tom';
var email = 'tom@qq.com';
var addr = '海淀区万寿路8号';
var age = '21';

// 4. 检测数据类型
// typeof  数值型-> number  字符串型-> string
var res1 = typeof(age);
//console.log(res1);


// 5. 查看Unicode码
var res2 = '一'.charCodeAt();
console.log(res2);
// 5.1 查看Unicode码值，并将结果转换成16进制
var res3 = '一'.charCodeAt().toString(16);
console.log(res3); //4e00
// 5.2 把16进制的Unicode码转为汉字
// 验证是否为汉字 4e00 ~ 9fa5
console.log('\u9fa5');//一

//  6. 布尔型
var isVip = true;
var isLogin = false;
var res4 = typeof(isVip); //boolean
console.log(res4);

// 7. 未定义型
var a;
console.log(a);











