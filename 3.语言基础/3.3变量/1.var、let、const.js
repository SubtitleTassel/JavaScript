//预提升，本质声明为window的属性
console.log(age); //undefine,var声明的变量age被预解析
var age = 10; //全局变量

function func() {
  var age = 12; //局部变量
  console.log(age, "age in func");
}
func();
console.log(age); //10
var age = 20; //var 声明的变量可以被反复声明
console.log(age); //20

//let声明的变量有块级作用域，不会被预提升，不能重复声明

let name = "jojo";
// let name="Dio" //重复声明提示报红
function test() {
  let name = "Dio";
  console.log(name); //Dio
}
test();
console.log(name); //jojo


for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}
//5、5、5、5、5、

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },500)
}
//0、1、2、3、4

//const 声明的必须同时复制，复制基本数据类型，值不可以变，赋值引用数据类型，引用数据类型的地址不可变，const保存的是引用数据类型的地址,const 不能重复声明，不存在预解析
