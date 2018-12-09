/**
 * Created by web-01 on 2018/8/13.
 */
// 创建一个圆对象，添加属性(半径 r )，添加成员方法(获取周长 getLength，获取面积 getArea);
var circle = {
    radius : 5,
    PI: 3.14,
    getLength : function () {
        console.log(2*this.PI*this.radius);
    },
    getArea : function () {
        console.log(this.PI*this.radius*this.radius);
    }
}

circle.getLength();
circle.getArea();


