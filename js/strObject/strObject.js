/**
 * Created by web-01 on 2018/8/15.
 */
// 字符串对象
var str1 = "hello";
var str2 = new String("woRld");
var str3 = String("java");
console.log(typeof str1);

console.log(typeof str2);
console.log(str2);

console.log(typeof str3);  // var str3 = String("java"); 与 var str1 = "hello";一样是string类型
console.log(str3);


// 1. 将字符串转为大写 -- 验证码
console.log(str2.toUpperCase());
// 2. 将字符串转为小写 -- 验证码
console.log(str2.toLowerCase());

// 获取验证码
function getCode() {
    var str = "JavaScript";
    while (true){
        var res = prompt("请输入字符：").toUpperCase();
        if(res == str.toUpperCase()){
            alert("验证码正确！！！");
            break;
        }
    }
}
getCode();


