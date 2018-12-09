var sum = 0;
for (var i = 1;i <= 100;i++)
{
	sum += i;
	if(sum > 4000){
		console.log(i);
		break;
	}
}

// 打印2000~2100之间所有的闰年
for (var j = 2000;j <= 2100 ;j++)
{
	// 如果满足闰年的条件，则打印i的值
	// 4年一闰，百年不闰，四百年再闰
	if((j%4 == 0 && j%100 != 0) || j%400 ==0){
		console.log("闰年：" + j);
//		continue;
	}

}




