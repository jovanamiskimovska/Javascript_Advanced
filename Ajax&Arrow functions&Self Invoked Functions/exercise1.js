$(document).ready(function(){
    let button = $("#button");
    let table=$("#table");
    let urlCall="https://swapi.dev/api/planets/?page=1";
  

    function planetsApiCall(urlParameter) {
        $.ajax({
            method: "GET",
            url: urlParameter,
            
            success: function planetsData(planetsResult) {
                console.log(planetsResult);
                 printDetails(planetsResult.results);
            },
            error: function (e) {
                console.log(e);
            }
        })
    }

     function printDetails(objectArray) {
         table.append(`<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>`);
        $("th").css("color","red");
        $("th").css("border","solid red 3px");
        for (let i = 0; i < 10; i++) {
           table.append(`<tr><td>${objectArray[i].name}</td><td>${objectArray[i].population}</td><td>${objectArray[i].climate}</td><td>${objectArray[i].gravity}</td></tr>`)
           $("td").css("color","blue");
           $("td").css("border","solid navy 3px");
        }
        
       table.css("border", "solid black 5px");
    }

    button.click(function () {
        planetsApiCall(urlCall);
    })
})