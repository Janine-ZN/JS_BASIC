/**
 * Created by web-01 on 2018/8/16.
 */
window.onload = function () {
    // 优化：统一时间的格式
    function size(num) {
        return num >= 10 ? num : '0' + num;
    }

    // 优化：获取标签
    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }

    /**
     * 1. 简单的日历
     */
    function getCalendar(){
        // 2. 创建date对象
        var date = new Date();
        console.log("获取当前日期：" + date);
        var y =  date.getFullYear();    // 获取完整的年份
        var m =  date.getMonth() + 1;   // 获取月份 0~11
        var d = date.getDate();         // 获取日期
        var week = date.getDay();       // 获取星期 0~6

        /*
         console.log("获取小时：" + date.getHours());
         console.log("获取分钟："+date.getMinutes());
         console.log("获取秒数：" + date.getSeconds());
         console.log("获取毫秒：" + date.getMilliseconds());
         console.log("获取时间戳：" + date.getTime());
         console.log("获取GMT：" + date);
         */

        // 3.将星期中的数字改成汉字
        var weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

        // 4. 加载完整日期
        $('box_top').innerText =  y + '年' + m + '月'+ d + '日 ' + weeks[week];

        // 5. 加载日期
        $('box_bottom').innerText = d;
    }
    getCalendar();

    /**
     * 2. 倒数后获取到图片
     */
    function getPic(){
        var timer = setInterval(function () {
            $('box1_time').innerText -= 1 ;
            // 判断
            if( $('box1_time').innerText === '0'){
                // 防止定时器累加
                clearInterval(timer);
                $('box1_time').style.display = 'none';
                $('huge').style.display = 'block';
            }
        },1000);
    }
    getPic();

    /**
     *  3. 考试倒计时
    */
    function countDown(){
            // 自定义将来的时间
        var nextDate = new Date('2018/11/09 00:00:00');

        // 自定义过去的时间
        // var perDate = new Date('2017/08/08 08:17:35');

        // 1. 开启定时器
        setInterval(function () {
            // 2. 获取现在的时间
            var currentDate = new Date();

            // 3. 获取时间戳
            var currentTime = currentDate.getTime();
            var nextTime = nextDate.getTime();

            // 4. 相差的时间戳
            var allTime = nextTime - currentTime;
            console.log("allTime" + allTime);

            // 5. 把毫秒转成秒
            var allSecond = parseInt(allTime / 1000);

            // 6. 转化
            // 6.1 一小時 3600 秒，总秒数/3600秒(有多少个3600秒，就有多少小时)，
            // 一天24小时，总小时/24小时(有多少个24小时，就有多少天)
            var d = parseInt(allSecond / 3600 / 24);
            // 6.2 有多少天，会余出剩下的不足一天的小时数，取余得到剩余的小时
            var h = parseInt(allSecond / 3600 % 24);   // 取余
            // 6.3 一小时 60 分钟，总秒数/60分钟(有多少个60分钟，就有多少个小时)，
            // 但是现在是获取分钟，剩下的不足60分钟（不足一小时），去取获取剩余的分钟
            var m = parseInt(allSecond / 60 % 60);
            // 6.4 一分钟 60 秒，总秒数%60秒，取剩余的秒数
            var s = parseInt(allSecond % 60);

            // 7. 注入
            $('box3_time').innerText = d+'天'+ size(h) +'时'+ size(m) + '分'+ size(s)+'秒';

        },1000);// 回调函数

    }
    countDown();

    /**************************************** 4. 时钟案例 ************************************/
    // 1. 获取所需标签
    // 2. 开启定时器
    setInterval(function () {
        // 2.1 获取当前的时间戳
        var clock_date = new Date();

        // 2.2 求出总毫秒数
        var millS = clock_date.getMilliseconds();
        // console.log("毫秒数：",millS);
        var clock_s = clock_date.getSeconds() + millS / 1000;
        var clock_m = clock_date.getMinutes() + clock_s / 60;
        var clock_h = clock_date.getHours() % 12 + clock_m / 60;

        // 2.3 旋转
        // 表盘 360度
        // 一秒钟 360/60
        // 一分钟 360/60
        // 一小时 360/12
        $('hour').style.transform = 'rotate('+ clock_h * 30 +'deg)';
        $('min').style.transform = 'rotate('+ clock_m * 6 +'deg)';
        $('second').style.transform = 'rotate('+ clock_s * 6 +'deg)';
    },10);

    /**************************************** 时钟案例 ************************************/

};


// 使用计时器Interval的三种方式
// 方式一：
var mytime = setInterval(function(){
    getTime();
},1000);// 利用延时调用
// 获取当地时间的方法
function getTime(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log("获取当地时间:" + t);
}









