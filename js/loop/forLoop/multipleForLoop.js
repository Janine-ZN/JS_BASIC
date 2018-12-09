///////////////////////////////// for循环中表达式的多种写法 ////////////////////////////////////
// 计算 1~10 的算数和
// 1. 正常情况下
var sum = 0;
for(var i=1;i<=10;i++){
    sum += i;
}
console.log(sum);

// 2. i 初始化 和 i++
var sum1 = 0;
var i = 1;
// i <= 10这条件不能省
for (;i <= 10 ; )
{
	sum1 +=i;
    // 循环体结束后执行i++
	i++;
}
console.log(sum1);

// 3. sum 和 i 在for循环中初始化
 for(var sum2 = 0,i = 1;i <= 10;i++){
    sum2 += i;
 }
console.log(sum2);

// 4. for 循环中，设置判断条件
var sum3 = 0;
var i = 1;
for(;;){
    console.log(i);
    sum3 += i;
    // 在 i 为 10 的时候，终止循环
    if(i == 10){
        break;
    }
    i++;
}
console.log("sunm3：" + sum3);
