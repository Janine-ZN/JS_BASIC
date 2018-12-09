/**
 * Created by web-01 on 2018/8/14.
 */
// 数组API
var arr = [1,2,3,4,5,6];
// 1. 数组转为字符串
var res1 = arr.toString();
console.log("toString 转成字符串：" + typeof res1);

// 2. 按照指定的字符分割数组元素 —— 字符串
var res2 = arr.join("-");
console.log("用 join 分割：" + res2);

// 3. 合并数组
var arr1 = [7,8];
var arr2 = [9,10];
console.log("用 concat 合并数组：" + arr.concat(arr1,arr2));

var arr1 = ["一","二","三","四","五","六"];
// 4. 截取数组元素
console.log("1. " + arr1.slice(1));      // 下标 1 开始，到最后
console.log("2. " + arr1.slice(1,6));    // 下标 1 开始，到下标 6 前一个
console.log("3. " + arr1.slice(-3));     // 倒数第 3 个
console.log("4. " + arr1.slice(-3,-1));

var country = ["中国","美国","德国","法国","英国"];
// 5. 删除数组元素(替换，插入)
// console.log(country.splice(1,2));   // 返回删除的元素
console.log(country.splice(1,2,"a","b","c"));   // 返回删除的元素
console.log(country);

// 6. 翻转数组
console.log(arr.reverse());


// 7. ★对数组元素进行排序
var num = [8,51,45,98,6];   // unicode 码 从小到大  45, 51, 6, 8, 98
console.log(num.sort());
console.log(num.sort(function(a,b){
    return a-b;
}));
console.log(num.sort(function(a,b){
    return b-a;
}));

var name = ["tom","jerry","david"];
// 1. 往数组的最后添加元素
name[name.length] = "kate";
console.log("添加了一个元素 kate：" + name);

name.push("lucy");
console.log("又添加了一个元素 lucy：" + name);

// 2. 删除最后一个元素
name.pop();  // 自动寻找数组中的最后一个元素
console.log("删除了最后的一个元素 lucy：" + name);

// 3. 在数组的最前边添加元素
name.unshift("thomas");
console.log("又再最前面添加了一个元素 thomas：" + name);

// 4. 删除第一个元素
name.shift();
console.log("删除了最前面的一个元素 thomas：" + name);

// 5. 删除指定位置的元素
// [tom,jerry,david,kate]
name.splice(1,2,"janine");
console.log("删除第2,3位置的值，添加一个janine：" + name);





