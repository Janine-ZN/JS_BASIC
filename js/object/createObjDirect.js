/**
 * Created by web-01 on 2018/8/13.
 */
// 使用对象直接量
// 手机对象：属性（颜色，大小，品牌，产地）
// 属性名：属性值
var phone = {
    color: "white",
    size:  '5.5',
    brand: 'Huawei',
    addr: 'China',
    os: 'android'
}
console.log('phone 对象:' , phone);

var book ={
    bname : "JavaScript高级程序设计",
    author : "Janine",
    publish : "中华出版社",
    page : "365",
    "pub-time" : "2018-02-15"
}
console.log("book 对象：" , book);

// 单独访问对象中的属性
console.log("book的书名：", book.bname);
console.log("book的出版社：", book["pub-time"]);

// 在对象中添加属性
book.color = 'red';
book['size'] = '16';
console.log("book 对象添加属性：" , book);



