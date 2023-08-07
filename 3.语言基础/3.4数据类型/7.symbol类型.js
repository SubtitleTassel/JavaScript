let fooSymbool=Symbol("foo");
let otherFooSymbol=Symbol("foo");

console.log(fooSymbool===otherFooSymbol);  //false

//2.使用全局符号注册表Symblo.for()
let foolGobalSymbol=Symbol.for("foo");
let otherFooGobalSymbol=Symbol.for("foo");

console.log(foolGobalSymbol===otherFooGobalSymbol) //true

//3.Symbol.keyFor()查询全局注册表
let s = Symbol.for("foolish");
console.log(Symbol.keyFor(s));  //foolish

//Object.getOwnPropertyNames() 返回对象实例的常规属性数组
//Object.getOwnPropertySymbols() 返回对象实例的符号属性数组

let s1=Symbol("foo");
let s2=Symbol("bar");

let o= {
    [s1]:"foo val",
    [s2]:"bar val",
    baz:"baz val",
    qux:"qux val",
};

console.log(Object.getOwnPropertyNames(o),"getOwnPropertyNames");
console.log(Object.getOwnPropertySymbols(o),"getOwnPropertySymbols");


