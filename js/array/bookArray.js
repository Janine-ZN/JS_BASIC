/**
 * Created by web-01 on 2018/8/14.
 */
// 创建一个数组，数组包含4本书的对象（title,author,publish,page），
// 遍历数组，以及对象，每个对象占一行
// 三国演义-罗贯中-人民邮电出版社-200页s
function bookArr() {
    var arr = [{title:"三国演义", author:"罗贯中", publish:"人民邮电出版社", page:300},
        {title:"西游记", author:"吴承恩", publish:"清华出版社", page:200},
        {title:"红楼梦", author:"曹雪芹", publish:"公安出版社", page:180},
        {title:"水浒传", author:"施耐庵", publish:"电子出版社", page:210}];
    var str = "";
    for(var i in arr){
        // 优化
        str = arr[i].title + "-" + arr[i].author + "-" + arr[i].publish + "-" + arr[i].page;
        console.log(str);

        // 双层循环运行效率会慢，外层循环4次，内层循环4次，一共循环了16次
        // var str = "";
        // for(var j in arr[i]){
        //     str +=  arr[i][j] + "-";
        //
        // }
        // console.log(str.slice(0,str.length-1));
    }
}
bookArr();





