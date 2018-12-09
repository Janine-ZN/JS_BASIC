/**
 * Created by web-01 on 2018/8/10.
 */
function isLeapYear(year){
    if(year%4 == 0 && year%100 !=0 || year%400 ==0){
        return true;
    }else {
        return false;
    }
}

var result = isLeapYear(2018);
console.log(result);

// 如果 result 结果是 true 天数打印 366，否则打印 365
if(result){
    console.log(366);
}else {
    console.log(365);
}
