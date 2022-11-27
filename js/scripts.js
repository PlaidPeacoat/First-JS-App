//adding an array with three different pokemon and their information
let pokemonList = [
    {
        id: 25,
        name: "Pikachu",
        type: "electric",
        XP: 100,
        height: 1.2
    },
    {
        id: 1,
        name: "Bulbasaur",
        type: "grass", XP: 50,
        height: 2.2
    },
    {
        id: 7,
        name: "Squirtle",
        type: "water",
        XP: 65,
        height: 1.8
    },
];

//printing all pokemon 
for (let i = 0;
    i < pokemonList.length; i++) {
    if (pokemonList[i].height > 2) {
        document.write(pokemonList[i].name + " is " + pokemonList[i].height + " feet tall and it is a " + pokemonList[i].type + " type! It's the largest starter Pokemon<br>")
    }
    else {
        document.write(pokemonList[i].name + " is " + pokemonList[i].height + " feet tall and it is a " + pokemonList[i].type + " type!<br>")
    }
}