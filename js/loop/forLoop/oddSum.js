// 练习1：计算1~100之间所有奇数的和？
// 判断奇数：i%2取余为1
var sum_2 = 0;
for(var i = 1;i <= 100;i++){
	if(i % 2 == 1){
		sum_2 += i;
	}
}
console.log("奇数和 = " + sum_2);


// 练习2：计算1~100之间所有能被7整除的数，并且是奇数的和。
var sum_7 = 0;
for (var i = 0;i <= 100 ;i++)
{
	if(i%7 ==0 && i%2 ==1 ){
		sum_7 += i;
	}

}
console.log("整除7 = "+sum_7);


// 练习3：计算：1~100以内的奇数之和和偶数之和
var evenSum=0;
var oddSum=0;
for(var  i = 1;i <= 100;i++){
    if (i%2 === 0){
        evenSum +=i;
    } else {
        oddSum +=i;
    }
}
document.write("偶数和：" + evenSum);
document.write("奇数和：" + oddSum);