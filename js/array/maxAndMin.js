/**
 * Created by web-01 on 2018/8/14.
 */
// 求数组中的最大值 [5,10,105,32,79]
function getMax() {
    var arr = [5,10,105,32,79];
    var max = arr[0];
    for(var key in arr){
        if(max < arr[key]){
            max = arr[key];
        }
    }
    return max;
}
console.log(getMax());

// 求数组中的最小值 [5,10,105,32,79]
function getMin() {
    // 类数组对象 arguments
    var min = arguments[0];
    for(var key in arguments){
        if(min > arguments[key]){
            min = arguments[key];
        }
    }
    return min;
}
console.log(getMin(5,10,105,32,79));

///////////////////////////// 输出指定下标的内容 /////////////////////////////////////
function fn(){
    var arr = ["刘备","曹操","袁绍","小乔","大乔"];
    for(var key in arr){
        if( arr[key] == "小乔"){
            var i = parseInt(key) + 1;
            console.log("第 " + i  + " 个是小乔！！！");
            break;
        }
    }
}

fn();


