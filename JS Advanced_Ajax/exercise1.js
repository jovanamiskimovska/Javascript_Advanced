$(document).ready(function () {

    let button = $("#button");

    function getPokemonData() {
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon`,
            
            success: function tenPokemonData(pokemonArray) {
                console.log(pokemonArray);
                printDetailsInUlist(pokemonArray.results);
            },
            error: function (e) {
                console.log(e);
            }
        })
    }

    function printDetailsInUlist(objectArray) {
        button.after('<ul>The names of the first 10 pokemons are:</ul>')
        $("ul").css("color","red");
        for (let i = 0; i < 10; i++) {
            $("ul").append(`<li>${objectArray[i].name}</li>`)
        }
    }

    button.click(function () {
        getPokemonData();
    })
})