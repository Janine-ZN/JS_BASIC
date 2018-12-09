/**
 * Created by web-01 on 2018/8/10.
 */
// 5! + 4! + 3! + 2! +1!
/**
 * 求阶乘
 * @param m
 * @returns {number}
 */
var fac = 1;
function getFactorial(m){
    // var fac = 1;
    for (var i = 1;i <= m;i++){
        fac *= i;
    }
    return fac;
}

/**
 * 求和
 * @param n
 * @returns {number}
 */
function getSum(n) {
    var sum = 0;
    for(var i = 1;i <= n;i++){
        sum += getFactorial(i); // 调用阶乘函数，进行加和计算
    }
    return sum;
}

var res = getSum(5);
console.log(res);
console.log(fac);
