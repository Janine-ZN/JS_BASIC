/**
 * Created by web-01 on 2018/8/15.
 */
var str = "CHINA是世界人口最多的国家，china的互联网发达，China的手机用户也是最多的,china";



// 查找China
console.log(str.indexOf("china"));
// global 全局 ignore 忽略
// 查找所有china，并且替换成“中国”
console.log(str.replace(/china/ig,"中国"));
// 把找到的结果放入到数组中
console.log(str.match(/china/ig));
// 找到一个 后 ，就把下标返回，找不到返回-1
console.log(str.search(/China/i));

