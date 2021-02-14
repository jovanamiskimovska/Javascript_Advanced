let firstNames=["Sam","Tonya","Josh","Jack","Hunter"];
let lastNames=["White","Monclare","Dutch","Robinson","Black"];

let res=((array1,array2)=>{
    let fullNameArray=[];
    for(let i=0;i<array1.length;i++){
        let fullName=`${array1[i]} ${array2[i]}`;
        fullNameArray.push(fullName);
    }
return fullNameArray;
})(firstNames,lastNames);

console.log(res);

