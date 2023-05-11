//标签语句 label:statement,典型语句应用于嵌套循环的场景

let str="";
loop1:for(let i=0;i<5;i++){
    if(i===1){
        continue loop1;
    }
    str=str+i;
}
console.log(str)