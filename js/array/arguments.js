/**
 * Created by web-01 on 2018/8/14.
 */
// 函数的内部访问函数名称 —— arguments.callee
function fn() {
    console.log(arguments); // 只能在函数内部使用
    for(var key in arguments){
        console.log(key + "----" + arguments[key]);
    }
}

fn(50,80,65,73);












