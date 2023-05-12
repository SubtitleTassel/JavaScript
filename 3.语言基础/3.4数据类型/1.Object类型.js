let obj = new Object();
// obj.sayHello=function (){
//     console.log("hello world")
// }

//1.1 hasOwnProperty 用于判断当前对象实例上是否存在给定的属性，而不是从原型链上继承的；
console.log(obj.hasOwnProperty("sayHello"));


obj.name="jojo";
obj.age="17";

//1.2 valueof() 返回对象的字符串表示
console.log(obj.valueOf(),typeof obj.valueOf());

// 1.3 toString() 返回对象对应得字符串表示，如果不能返回对象对应的字符串表示，则返回 [object Object]
console.log(obj.toString(),typeof obj.toString());

// 1.4 toLocalString()
console.log(obj.toLocaleString(),typeof obj.toLocaleString())
