
//1、原始类型按值访问，引用类型按引用访问

//原始值尝试添加属性不会报错。
let name = "Nicholas"
name.age=27
console.log(name.age); //undefined


//2.复制值,
//原始值会被复制到新的位置，
//引用值复制的是指向存储在内存中的对象的指针，浅拷贝

let num1=5;
let num2=num1;
num2++;
console.log(num1,num2);

let obj1={
    name:"jojo",
    age:17,
}

let obj2=obj1;
obj2.homeland="japan";
console.log(obj1,obj2);

//3，函数参数都是按值传递的,值被复制到一个局部变量
function fun(age){
    age++;
    console.log(age,"age in fun")  //18
}
fun(obj1.age);
console.log(obj1.age,"obj1.age") //17


//传入一个对象，对象按值传递
let person =new Object();
function fun2(obj) {
    obj.name ="Bobs";
}
fun2(person);
console.log(person,"person obj");
function fun3(obj){
    obj.name="jojo";
    obj=new Object();  //obj指向新对象
    obj.name="Dio"
}
fun3(person)
console.log(person,"person edit by fun3")