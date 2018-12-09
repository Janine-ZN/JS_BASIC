var password = "123456";
// 先验证，后判断
do{
	var right = prompt("请输入密码：");
	if(password == right){
		alert("right");
		break;
	}else{
		alert("error");
		break;
	}
}while(true);

// 无法设置alert提示框，不符合用户需求，不建议使用
//do{
//	var right = prompt("请输入密码：");
//}while(password != right);
