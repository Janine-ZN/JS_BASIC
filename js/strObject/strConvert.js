/**
 * Created by web-01 on 2018/8/15.
 */
// 数组转成字符串
// toString()
function joinArr () {
    var arr = ['tom','jerry','david'];
    console.log(arr.join("|"));     // 按 | 将数组转换成字符串
}
joinArr();


// 将字符串按指定的格式转换数组 —— 切割字符串
function splitStr(){
    var str = "tom|jerry|david";
    console.log(str.split("|"));    // 按 | 将字符串转成数组
    var email = "jerry@sina.com";
    console.log(email.split("@"));
}
splitStr();


function enStr(){
    var str = "wE arE faMily";
    // 按空格分割成数组
    var arr = str.split(" ");
    var sum_str = "" ;
    for(var i = 0;i < arr.length;i++){
        // sum_str += arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase() +" ";
        // 把拼接的结果，替换数组中当前的值
        arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    // var first =  arr[0].substring(0,1).toUpperCase() + arr[0].substring(1).toLowerCase();
    // var second =  arr[1].substring(0,1).toUpperCase() + arr[1].substring(1).toLowerCase();
    // var three =  arr[2].substring(0,1).toUpperCase() + arr[2].substring(1).toLowerCase();

    // console.log(sum_str.substring(0,sum_str.length-1));
    console.log(arr.join(" "));
}
enStr();



















