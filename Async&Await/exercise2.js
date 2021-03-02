$(document).ready(function(){

let text=$("#text");
let button=$("#button");

function enteredStringCheck(input){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(!input || !isNaN(input) || typeof(input)!="string"){
               reject(input);
           }
           else{
               resolve(input);
           } 
        },4000)
    })
}


button.click(function(){
enteredStringCheck(text.val())
.then(success=>{
    console.log(`${success.toUpperCase()}`)
})
.catch(error=>{
    console.log(error);
})
})

})