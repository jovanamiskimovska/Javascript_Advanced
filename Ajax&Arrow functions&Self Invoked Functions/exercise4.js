$(document).ready(function () {

    let number = $("#number");
    let button = $("#button");

    function calculateFactoriel(num) {
        if (num=="" || num==0) {
            console.log("You have to enter a number in the input field but not 0!");
          return;
        }
        if (num === 1) {
            return 1;
        }
            return num * calculateFactoriel(num - 1);
    }

    button.click(function () {
        let result = calculateFactoriel(number.val());
        if(result===undefined){
            return;
        }
        else{console.log(`The factoriel of ${number.val()} is: ${result}`)}     
    })

})