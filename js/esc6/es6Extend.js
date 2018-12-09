/**
 * Created by web-01 on 2018/8/17.
 */
// 冒泡排序
/*(1)比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 *(2)对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
 *(3)针对所有的元素重复以上的步骤，除了最后一个。
 *(4)持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。*/
var arr = [40,60,50,39,23];

// 从大到小排序
// 第一层循环:控制比较的轮数
for(var i = 1;i <= arr.length;i++){
    // 第二轮循环:比较的次数
    for(var j = 0; j < arr.length - i;j++){
        if(arr[j+1] > arr[j]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}


// 选择排序（不清楚）
// for(var i = 1;i <= arr.length;i++){
//     // 第二轮循环:比较的次数
//     for(var j = 0; j < i;j++){
//         if(arr[i] > arr[j]){
//             var temp = arr[j];
//             arr[j] = arr[i];
//             arr[j+1] = temp;
//         }
//     }
// }

console.log(arr);




