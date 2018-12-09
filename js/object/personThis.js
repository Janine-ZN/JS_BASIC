/**
 * Created by web-01 on 2018/8/13.
 */
// 创建人对象
var person = {// 成员属性
    name : "terry",
    age : 18,
    gender : "女",
    say :function (){// 成员方法
        // 对象中 this 相当于当前的对象 —— person
        console.log("我叫", this.name , "，我今年18岁，性别女");
        var res = "我叫Janine，我今年18岁，性别男"
        return res;
    },
    run:function () {
        console.log("我正在跑步！！！");
    }

}
// 如何调用对象中的方法
person.run();
console.log(person.say());

//////////////////////////////// this 的用法 ///////////////////////////////////////
/**
 * this
 * 	指的是当前对象
 * 	关键词，不能当做变量名
 *  只能读，不能写。它的值只能用，不能修改
 *
 * 1、在函数外用
 * 		this是指向window
 * 2、在函数内使用
 * 		1、函数是直接被调用的
 * 			this指向window
 * 		2、被事件所调用，并且是以赋值的形式出现
 * 			this指向是，谁调用了函数，那this就指向谁
 *
 * 谁调用了函数，那this就指向谁
 */

//	alert(this); // window
//	alert(this == window); // true

function fn() {
    console.log(this);
}
fn(); // window

// document.onclick = fn(); // document
// var btn = document.getElementById("btn");
// btn.onclick = fn; // input