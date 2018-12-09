/**
 * Created by web-01 on 2018/8/10.
 */
////////////////////////////////////////// 关系（比较）运算符 /////////////////////////////////////////////////
// >  >=  <  <=  ==  !=  ===(全等于)  !==(不全等于)
console.log(4 > 3);
console.log(3 != 5);

// 1.对于非数值进行比较时，会将其转为数字然后在比较
console.log(1 > false);    // true
console.log(1 >= true);    // true
console.log(1 >= 'it10');   // false
console.log(1 > null);     // true
console.log('3' > 10);      // false

// 2.如果符号两侧的值都是字符串时，不会将其转换为数字进行比较，而会分别比较字符串字符的Unicode编码
console.log('a' < 'b');     // true
console.log('3' > '10');    // true 比较 unicode 码
console.log('张三丰'>'张无忌');
var res = '无'.charCodeAt();
console.log(res);

// 3. null、undefined、NaN比较
console.log(null == null);  // true
console.log(undefined == undefined);    // true
console.log(NaN == NaN);    // false

// 4. NaN很特殊
var num1 = 100;
console.log(isNaN(num1)); // false
var num2 = NaN;
console.log(isNaN(num2));    // true
// '3m'会转成数值型,使用Number(),出现非数字结果NaN
console.log(Number("3m")); // NaN
console.log("3m" < 10);
console.log(NaN == NaN);

// 5. 同时比较 "类型" 和 "值"
console.log(2 == '2');// true 比较值是否相等
console.log(123 == '123'); // true
console.log(123 === '123');    // false 比较类型和值
console.log(null == undefined); // true
console.log(null === undefined);    // false





