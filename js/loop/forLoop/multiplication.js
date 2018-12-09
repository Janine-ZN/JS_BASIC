// 打印“*****”
var string = "";
var i = 1;
for (;i <= 5; )
{
	string += "*";
	i++;
}
console.log(string);

// 打印九九乘法表的第五行

var str = "";
var i = 1;
for (;i <= 5 ; )
{ 
	str += i + "*5=" + (i*5) + " ";
	i++;
}
console.log(str);

// 打印九九乘法表
for (var i = 1;i <= 9;i++ )
{	
	var str_9 = "";
	for (var j = 1;j <= i ;j++ )
	{
		str_9 += "i*j=" + (i*j) + ' ';
		
	}
	console.log(str_9);
}

