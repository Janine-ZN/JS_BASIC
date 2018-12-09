/**
 * Created by web-01 on 2018/8/15.
 */
var str = "javascript";
// 1. 获取字符串的长度
console.log(str.length);

// 2. 获取指定下标对应的字符
console.log(str.charAt(0));
console.log(str.charCodeAt(0));

// 3. 遍历字符串
function traverseStr() {
    console.log("-------------------- 遍历字符串 -------------------");
    var str = "javascript";
    var sum = "";
    // for(var key in str){
    //     sum += str[key] + "-";
    // }
    for(var i = 0;i < str.length;i++){
        // sum += str[i] + "-";
        sum += str.charAt(i) + "-";
    }
    console.log(sum.slice(0,sum.length-1));
}
traverseStr();

// 4. 匹配字符
function matchStr(){
    console.log("---------------- 字符串中的字符匹配 ---------------");
    var str = "javascript";
    var count = 0;

    for(var i = 0;i < str.length;i++){
        if(str.charAt(i) == 'a'){
            count++;
        }
    }
    console.log(count);
}
matchStr();


// 5. 查找字符对应的下标
function strOfIndex(){
    console.log("---------------- 查找字符对应的下标 ---------------");
    var str = "javascript";
    // 5.1 查找字符对应的下标
    console.log("获取到的是数字：" + typeof str.indexOf('a'));
    // 5.2 从下标 5 开始找
    console.log("从下标为5的地方开始找：" + str.indexOf('a',5)); // 如果不存在输出的是 -1
    // 5.3 查找某字符最后一次出现的下标
    console.log("从后往前找：" + str.lastIndexOf('a'));
}
strOfIndex();

/**
 * 验证邮箱格式
 * @returns {boolean}
 */
function checkMail(){
    console.log("------------------- 验证邮箱格式 ------------------");
    var str = "23434@qq.com";
    if(str.indexOf('@') > -1){
         return true;
     }

    // for(var i = 0;i < str.length;i++){
    //     if(str.charAt(i) == '@'){
    //         return true;
    //     }
    // }
    return false;
}
var res_mail = checkMail();
console.log("验证成功：" + res_mail);

/**
 * ★截取字符串
 */
function subStr() {
    console.log("-------------------- 截取字符串 -------------------");
    var str = "javascript";
//    字符串截取 —— slice
//    数组元素截取 —— slice
    console.log(str.slice(4));  // script  从下标为4的字符，往下输出所有
    console.log(str.slice(1, 5));   // avas
    console.log(str.slice(-3)); // ipt
    console.log(str.slice(-3,-1));  // ip

    console.log("---------------------------------------------------");  // ip

    console.log(str.substring(4));  // script
    console.log(str.substring(1, 5));   // avas
    console.log(str.substring(-3)); // substring 不支持负数，自动转成0，获取的是完整字符串


}
subStr();

/**
 * 获取身份证上的年月日
 */
function getID() {
    console.log("--------------- 获取身份证上的年月日 --------------");
    var str = "1458961993020689654";
    var s;
    s = str.substring(6,10) + "年" + str.substring(10,12) + "月" + str.substring(12,14)+ "日";
    console.log(s);
}
getID();

// 通过邮箱地址获取邮箱的用户名和域名
function getUser(){
    console.log("------- 通过邮箱地址获取邮箱的用户名和域名 --------");
    var str = "jerry@sina.com";
    var num = str.indexOf('@');
    console.log("用户名：" + str.substring(0,num) + " 域名：" + str.substring(num+1));
}
getUser();

function convertChar(){
    var str = "heLLo";
    var res = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
    console.log(res);
}
convertChar();
