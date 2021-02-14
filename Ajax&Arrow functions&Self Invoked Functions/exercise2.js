$(document).ready(function () {

    let defaultButton = $("#button1");
    let table = $("#table");
    let nextButton = $("#nextButton").hide();
    let previousButton = $("#previousButton").hide();
    let counter = 1;

    let planetsApiCall = () => {
        $.ajax({
            method: "GET",
            url: `https://swapi.dev/api/planets/?page=${counter}`,

            success: (planetsResult) => {
                console.log(planetsResult);
                printDetails(planetsResult.results);
            },
            error: (e) => {
                console.log(e);
            }
        });
    };

    let printDetails = (objectArray) => {
        table.html("");
        table.append(`<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>`);
        $("th").css("color", "red");
        $("th").css("border", "solid red 3px");
        for (let i = 0; i < 10; i++) {
            table.append(`<tr><td>${objectArray[i].name}</td><td>${objectArray[i].population}</td><td>${objectArray[i].climate}</td><td>${objectArray[i].gravity}</td></tr>`)
            $("td").css("color", "blue");
            $("td").css("border", "solid navy 3px");
        }
        table.css("border", "solid black 5px");
    };

    defaultButton.click(() => {
        nextButton.show();
        planetsApiCall();
        defaultButton.hide()
    })

    nextButton.click(() => {
        counter++;
        previousButton.show();
        if (counter === 6) {
            nextButton.hide();
        }
        else {
            nextButton.show();
        }
        planetsApiCall();
    })

    previousButton.click(() => {
        counter--;
        nextButton.show();
        if (counter === 1) {
            previousButton.hide();
        }
        else {
            previousButton.show();
        }
        planetsApiCall();
    })
})