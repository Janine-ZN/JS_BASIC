/**
 * Created by web-01 on 2018/8/14.
 */
var stu = [80,79,68,96];
var sum = 0;
for(var i in stu){
    sum += stu[i];
}
var avg = sum/stu.length;
console.log("总和：" + sum + " 平均值：" + avg);