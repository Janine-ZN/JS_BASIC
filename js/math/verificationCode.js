/**
 * Created by web-01 on 2018/8/16.
 */
// 生成验证码
function getCode() {
    var arr = ['a','b','c','d','e',1,2,3,4,5,6,7];
    var str = "";
    for(var i = 0;i < 4;i++){
        str += arr[Math.floor(Math.random() * arr.length)];

    }
    console.log("验证码：" + str );
}
getCode();