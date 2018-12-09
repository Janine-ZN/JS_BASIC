/**
 * Created by web-01 on 2018/8/13.
 */
// 使用内置构造函数创建对象 —— 工厂函数
var  dog = new Object();
// 单独添加属性
dog.name = '大黄';
dog.color = 'yellow';
dog.type = '中华田园犬';

console.log(dog);

// 使用函数创建对象
function createObj(name,color,type){
    var  dog = new Object();
    dog.name = name;
    dog.color = color;
    dog.type = type;

    // 返回创建的对象
    return dog;
}
var res_dog = createObj("二哈","棕色","金毛");
console.log("我是一只小狗：" , res_dog);


function computer(brand,color,size){
    var computer = new Object();
    computer.brand = brand;
    computer.color = color;
    computer.size = size;
    return computer;
}

var res_computor = computer("华硕",'black','15');
console.log("我是一台电脑：",res_computor);



