let pokemonRepository = (function () {
    let pokemonList = [
        {
            id: 25,
            name: "Pikachu",
            type: ["electric"],
            XP: 100,
            height: 1.2
        },
        {
            id: 1,
            name: "Bulbasaur",
            type: ["grass"],
            XP: 50,
            height: 2.2,
        },
        {
            id: 7,
            name: "Squirtle",
            type: ["water"],
            XP: 65,
            height: 1.8
        },
        {
            id: 157,
            name: "Typhlosion",
            type: ["fire"],
            XP: 73,
            height: 1.7
        },
    ];

    function add(pokemon) {
        if (typeof pokemon === "object" &&
            Object.keys(pokemon).includes("id") &&
            Object.keys(pokemon).includes("name") &&
            Object.keys(pokemon).includes("type") &&
            Object.keys(pokemon).includes("XP") &&
            Object.keys(pokemon).includes("height")) {
            pokemonList.push(pokemon);
        } else {
            alert("Field is empty or incorrect format");
        }
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
        button.addEventListener("click", (Event) =>
            showDetails(pokemon));
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

    }
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    //getAll function to return all of the items in the pokemonList array
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});


//I am trying to add an event listener to the button, but I am not sure how to do it. I have tried a few different ways but none of them seem to work. I am not sure if I am missing something or if I am just doing it wrong. Any help would be appreciated. Thanks!