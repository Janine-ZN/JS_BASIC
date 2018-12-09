/**
 * Created by web-01 on 2018/8/10.
 */
function  getThreeMax(a,b,c) {
    var max = a > b ? a : b;
    var result = max > c ? max : c;
    return console.log(result);
}
getThreeMax(4,5,3);
