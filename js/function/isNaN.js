/**
 * Created by web-01 on 2018/8/13.
 */
// isNaN() 方法：判断某些值是不是数字
// 不是数字：true
// 是数字：false   讨厌数字

// isNaN() 判断原理：
// 首先给内部 Number() 进行转换，只要 Number() 转换出来是数字直接为false,否则为true.

// 首先用 isNaN 的兄弟 Number() 进行转换为 '250' => 数字 250 ,然后给 isNaN ,isNaN一看，原来是数字，直接就是false.
console.log(isNaN('265'));//false

// 首先用 Number() 进行转换 true => 1 ,isNaN一看是数字1，直接为false.
console.log(isNaN(true));//false

console.log(isNaN(2));// false 是数字为false
console.log(isNaN(200));// false 是数字为false

console.log(isNaN('你好'));//true 字符串为true,只要不是数字都为true

// 函数也是true,只要不是数字都为true
console.log(isNaN(function(){console.log(1)}));//true