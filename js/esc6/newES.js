/**
 * Created by web-01 on 2018/8/16.
 */
//1.块级作用域
{
    let a=1;
}
var i=1;
while(i<3){
    let b=2;
    i++;
    console.log(b);
}
// console.log(b);


//2.箭头函数
var arr=[100,76,99,36];
arr.sort(function(a,b){
 return a-b;
});
arr.sort((a,b)=>a-b);   // 从小到大
console.log(arr);

arr.sort((a,b)=>{
 return b-a;
});
arr.sort((a,b)=>b-a);   // 从大到小
console.log(arr);

// 3. 模版字符串
// 书名：，作者：，出版社：
var bname = "三国演义";
var author = "罗贯中";
var publish = "人民邮电出版社";

// var str = "书名：" + bname + "作者：" + author + "出版社：" + publish ;
var str = `书名:${bname} - 作者:${author} - 出版社:${publish}`;
console.log(str);


