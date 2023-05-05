//比较运算符，字符串的比较
//字符串比较的是字符背后的编码数值，大写字符的编码值比小写字母的编码值小32
//比较字符应该统一转换成小写字符再比较

let string1="Brick";
let string2="alphabet";
console.log(string1>string2); //false

console.log(string1.toLowerCase()>string2.toLowerCase());//true