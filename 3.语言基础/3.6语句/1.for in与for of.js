//for in ,用于枚举对象中非符号键属性,遍历顺序因浏览器而异

const obj={
    name:"jojo",
    age:"18",
    homeland:"japan"
}

for(const key in obj){
    console.log(key,obj[key])
}

//for of 用于遍历可迭代对象，for of按照可迭代对象next()方法产生值的顺序来迭代可迭代对象

const array=[3,5,7,8,9,10]
for(const ele of array){
    console.log(ele)
}