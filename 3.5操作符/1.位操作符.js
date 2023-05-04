//1.按位非
//按位非的最终效果是对数值取反并减 1
//位操作相比于正常的取反加减操作，速度快得多，因为位操作是在数值的底层表示上进行的
let num1=25;

let num2=~num1;
console.log(num2,"num2");//-26

//按位与,将数值转换为二进制，两个都是1返回1，有1个是0返回0
let result=25&3;
console.log(result,"result");//1

//按位或,有1返回1，两个都是0返回0
let result1=25|3;
console.log(result1,"reuslt1");//27

//异或,两个不同返回1，两个相同返回0
let reuslt2=25^3;
console.log(reuslt2,"reuslt2");//26

//左移，数值位向左移动，右边空出的位数补0，左移保留符号位,符号位不移动，有符号右移同理
let oldValue=2;
let newValue=oldValue<<5;
console.log(newValue,"newValue");

//无符号右移动>>>
//对于正数，无符号右移与有符号右移结果相同
//对于负数，无符号右移动将负数的二进制表示（即正数的补码）当成正数移动
let oldValue1 = -64; // 等于二进制 1111111111111111
let newValue1 = oldValue1 >>> 5; // 等于十进制 134217726
console.log(newValue1,"newValue1")