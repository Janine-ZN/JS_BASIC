/**
 * Created by web-01 on 2018/8/16.
 */
// 使用计时器Interval的三种方式
// 方式一：
var mytime = setInterval(function(){
    getTime();
},1000);// 利用延时调用

// 方式二：直接调方法
setInterval(getLog,1000);// 利用延时调用

// 方法三：直接输出
setInterval('console.log("我是谁?")',1000);// 利用延时调用

function  getLog() {
    console.log("我在哪儿?");
}

// 获取当地时间的方法
function getTime(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log("获取当地时间:" + t);
}

function timeout(){
    alert("你好！");
    var thistime = setTimeout(function(){
        timeout();  //自己调自己
    },4000);
}