/*游戏规则：初始化一个数字(var num = 10)，
循环（无限循环）弹出提示框，大小等于分别判断，判断出相应的结果弹出对话框
*/
var num = 10;
var grassnum = prompt("请输入一个数字：");
while(true){
	if(grassnum < num){
		alert("small");
		break;
	}else if(grassnum > num){
		alert("big");
		break;
	}else{
		alert("right");
		break;
	}
}

