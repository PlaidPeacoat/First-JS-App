let pokemonRepository = (function () {

    let pokemonList = [];

    function add(pokemon) {
        if (typeof pokemon === 'object' && pokemon.name && pokemon.height && pokemon.type && Object.keys(pokemon).length === 3) {
            pokemonList.push(pokemon);
        } else {
            return `${pokemon} is not a Pokémon. Pokémon must be an object with the keys name, height and type`;
        }
    }

    function getAll() {
        return pokemonList
    }

    return {
        add: add,
        getAll: getAll

    };

})();

pokemonRepository.add({
    id: 25,
    name: "Pikachu",
    type: "electric",
    XP: 100,
    height: 1.2
});
pokemonRepository.add({
    id: 1,
    name: "Bulbasaur",
    type: "grass", XP: 50,
    height: 2.2
});
pokemonRepository.add({
    id: 7,
    name: "Squirtle",
    type: "water",
    XP: 65,
    height: 1.8
});
pokemonRepository.add({
    id: 157,
    name: "Typhlosion",
    type: "fire",
    XP: 73,
    height: 1.7
});

let pokemonList = pokemonRepository.getAll();


//forEach() function to iterate over the Pokémon in the pokemonList array (external function)
pokemonList.forEach(printDetails);
function printDetails(pokemon) {
    let highlight = '';
    if (pokemon.height > 2.0) {
        highlight = " - Wow, that’s big!";
    }
    document.write(`<li>${pokemon.name} (height: ${pokemon.height}) ${highlight}</li>`);
}

let pokemonNames = [];
for (let i = 0; i < pokemonList.length; i++) {
    pokemonNames.push(pokemonList[i].name);
}

function findPokemons(query) {
    return pokemonNames.filter(function (name) {
        return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
}

console.log(findPokemons('Iv'))