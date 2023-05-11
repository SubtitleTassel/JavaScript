//with语句作用是将代码作用域设置为特定的对象

const obj={
    name:"jojo",
    age:"17",
    homeland:"japan",
    daughter:{
        name:"jolin"
    }
}

const name=obj.name;
const age=obj.age;
const homeland=obj.homeland;
const daughter=obj.daughter.name
console.log(name);
console.log(age);
console.log(homeland);
console.log(daughter);

with(obj){
    var joName=name;
    var joAge=age;
    var joHomeland=homeland;
    var joDaughterName=daughter.name
}

console.log("------------------------------------我是一条分割线----------------------------------------")
console.log(joName);
console.log(joAge);
console.log(joHomeland);
console.log(joDaughterName);