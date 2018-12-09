/**
 * Created by web-01 on 2018/8/16.
 */
// 1. 入职时间
var now = new Date('2018-5-10');
// 2. 先复制一份入职时间的date对象
var target = new Date(now);

// 3. 合同的有效期为3年，合同到期时间是多少？
target.setFullYear(now.getFullYear() + 3);
console.log(target.toLocaleDateString());

// 4. 在合同到期一个月续签合同，如果遇到周末，提前到周五
var renew = new Date(target);
renew.setMonth(target.getMonth() -1);


if(renew.getDay() == 0 ){
    renew.setDate(renew.getDate() - 2);
    console.log(renew.toLocaleDateString());
}else if(renew.getDay() == 6){
    renew.setDate(renew.getDate() - 1);
    console.log(renew.toLocaleDateString());
}else {
    console.log(renew.toLocaleDateString());
}
// if(renew.getDay() == 0 ){
//     renew.setDate(renew.getDate() - 2);
//     console.log(renew.toLocaleDateString());
// }
// if(renew.getDay() == 6){
//     renew.setDate(renew.getDate() - 1);
//     console.log(renew.toLocaleDateString());
// }

// var num = renew.getDay();
// switch (parseInt(num)){
//     case 0:
//         renew.setDate(renew.getDate() - 2);
//         console.log(renew.toLocaleString());
//         break;
//     case 6:
//         renew.setDate(renew.getDate() - 1);
//         console.log(renew.toLocaleDateString());
//         break;
//     default:
//         console.log(renew.toLocaleDateString());
//         break;
// }

// 要求在续签前一周，向员工发起续签的提醒，求提醒时间
var remind = new Date(renew);
remind.setDate(renew.getDate() - 7);
console.log(remind.toLocaleDateString());














