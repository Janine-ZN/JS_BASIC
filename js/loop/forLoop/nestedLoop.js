// 循环体的代码会执行5次
// 外层循环：控制循环5行
for (var i = 1;i <= 5;i++)
{	// 循环体
	var str = '';
	// 内层循环：控制循环产生5个*(5列)
	for (var j = 1;j <= 5; j++)
	{
		str += "*";
	}
	console.log(str);
}


for (var i = 1;i <= 5;i++)
{	// 循环体
	var str1 = '';
	// 内层循环：控制循环产生5个*(5列)
	for (var j = 1;j <= i; j++)
	{
		str1 += "*";
	}
	console.log(str1);
}




