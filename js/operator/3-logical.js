/**
 * Created by web-01 on 2018/8/10.
 */
/////////////////////////////////////////// 逻辑运算符 ////////////////////////////////////////////
//  && || ! 逻辑中断
var salary = 4500;
// 1. 判断是否在 5000~8000 之间
console.log(salary >= 5000 && salary <= 8000);

// 2. 满足大于等于60，或者 满足小于等于12
var age = 6;
console.log(age >= 60 || age <= 12);

// 3. ! 非
console.log(!(3>4)); //true

// 4. 逻辑中断
var a = 2;
a > 3 && console.log('hello');   //  如果第一个条件为false，整个的结果就是false，第二个条件也没有继续执行的必要了
a > 3 || console.log('world');   //  如果第一个条件为true，整个的结果就是true，第二个条件也没有继续执行的必要了

var a = 1,b=2;
a>3  &&  (a=5);
b<5  ||  (b=4);
console.log(a);
console.log(b);











