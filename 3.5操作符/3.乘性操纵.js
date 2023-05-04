//除法
let result=66/12;
console.log(result)
//取模操作
let result1=26%5;
console.log(result1,"reuslt1");


//指数操作符 Math.pow(),**
console.log(Math.pow(3,2))
console.log(3**2);

//加法操作，数字加字符串结果是字符串而不是数字
console.log(3+5);
console.log(3+"5");

//减法操作
//减法操作，JS引擎会用Number()将字符串，布尔,null,undefined转换为数值，再进行减法运算
console.log(5-true);
console.log(5-"");
console.log(5-"2");
console.log(5-null);
