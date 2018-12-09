/**
 * Created by web-01 on 2018/8/10.
 */
// switch语句
var str = "123"
switch (str){
    case 123:   // 全等于 ===
        console.log("数字")
        break;
    case  "123":
        console.log(("字符串"));
        break;
    default:
        console.log("其他数字");
        break;

}


////////////////////// 练习题：接收用户输入的一个整数month代表月份，根据月份输入对应的季节 ////////////////////////
var month,result;
month = +(window.prompt("输入一个1~12的月份："));
if(isNaN(month)){
    alert("不是一个数");
}else{
    //  判断对应的季节：12 1 2 冬季 3 4 5 春季 6 7 8 夏季 9 10 11 秋季
    switch (month){
        case 1:
        case 2:
        case 12:
            result = "冬季";
            break;
        case 3:
        case 4:
        case 5:
            result = "春季";
            break;
        case 6:
        case 7:
        case 8:
            result = "夏季";
            break;
        case 9:
        case 10:
        case 11:
            result = "秋季";
            break;
        default:
            result = "未知季节";
    }
    alert(result);
}


//////////////////////////////////// 练习题：通过分数查看成绩情况 //////////////////////////////////////////////////
//switch-case
var score = 72;
//分数/10，取整
score = parseInt(score/10);//6,7,8,9,10..
switch(score){
    case 6:
        console.log('及格');
        break;//中断，结束
    case 7:
        console.log('中等');
        break;
    case 8:
        console.log('良好');
        break;
    case 9:
        console.log('优秀');
        break;
    case 10:
        console.log('满分');
        break;
    default:
        console.log('不及格');
}