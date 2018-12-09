/**
 * Created by web-01 on 2018/8/10.
 */
/************ 练习题：从键盘输入一个整数，判断其是否是偶数，如果是偶数就输出YES，否则输出NO *******************/
 // 1. 定义一个变量
 var temp;
 // 2. 接收用户输入的整数
 // 2.1 将字符串转成数值
 temp = +(window.prompt("请输入一个数:"));
 // 3. 合法性验证
 if(isNaN(temp)){
        alert("不是一个数，输入有误");
    }else if (temp == '') {   // 优化
        alert("输入的是一个空值");
    }else {
        // 4. 判断用户输入的整数是否是偶数
        if(temp%2 === 0){
            alert("YES");
        }else {
            alert("NO");
        }
        // (temp%2 === 0) ?  alert("YES"): alert("NO");  // 优化
    }
