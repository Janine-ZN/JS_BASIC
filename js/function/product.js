/**
 * Created by web-01 on 2018/8/10.
 */
function product(n){
    var result = 1;
    for(var i = 1;i <= n;i++){
        result *= i;
    }
    return result;
}

var product = product(20);
console.log(product);