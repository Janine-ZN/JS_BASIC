/**
 * Created by web-01 on 2018/8/14.
 */
// 1. 创建一个数组对象
var arr = new Array();

// 2. 进入循环
while (true){
    // 3. 弹出提示框
    var prompt_name = prompt("添加人名：");
    // 4. 判断输入的姓名
    if(prompt_name == "quit"){
        break;
    }
    // 5. 如果不等于“quit”，往数组里添加数据
    arr[arr.length] = prompt_name;
}
console.log("显示数组内容：" + arr);




































