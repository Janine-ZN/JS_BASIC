/**
 * Created by web-01 on 2018/8/10.
 */
/************ 练习题：接收用户输入的1~7的整数，根据用户输入的整数，输出对应的星期几 *******************************/
 // 1. 定义一个变量
 var day;

 // 2. 接收输入的整数
 day = +(window.prompt("输入一个1~7的整数："));

// 3. 判断输入的内容是否为一个数，是否是整数，是否为空，是否是1~7的整数
if(isNaN(day)){
    alert("不是一个数");
}else if(parseInt(day) != day){
    alert("不是一个整数");
}else if(day == ''){
    alert("请勿输入空值！！！");
}else if(day >=1 &&day <= 7){
    //    4. 判断对应的星期几
    if(day == 1){
        alert("星期一");
    }else if(day == 2){
        alert("星期二");
    }else if(day == 3){
        alert("星期三");
    }else if(day == 4){
        alert("星期四");
    }else if(day == 5){
        alert("星期五");
    }else if(day == 6){
        alert("星期六");
    }else {
        alert("星期日");
    }
}else {
    alert("输入的数值不符合要求！！！");
}