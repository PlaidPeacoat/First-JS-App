let pokemonRepository = (function () {
    //pokemon array
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //function to add a pokemon to the pokemonList array
    function add(pokemon) {
        pokemonList.push(pokemon);
    }


    //function to add a list item to the pokemonList array
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let pokemonItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        button.addEventListener('click', Event => showDetails(pokemon));
        pokemonItem.appendChild(button);
        pokemonList.appendChild(pokemonItem);
    }


    function getAll() {
        return pokemonList;
    }

    //function to load the pokemon list from the API
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {

            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };

                add(pokemon);
            });

        }).catch(function (e) {
            console.error(e);
        })
    }
    //function to load the pokemon details from the API
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();

        }).then(function (details) {
            item.imageURL = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.log(e);
        });
    }
    //function to show the modal with the pokemon details
    function showModal(title, text, img) {
        //clear the modal container of any previous modal content
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';

        //create new div with class = 'modal"
        let modal = document.createElement('div');
        modal.classList.add('modal');

        //create button element with class = "modal-close" with Close text and calls hideModal function to close upon click, esc, or click outside of modal
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        //H1 for the title in the modal
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;
        //paragraph for the body of the modeal
        let contentElement = document.createElement('p');
        contentElement.innerText = text;
        //image element for the pokemon image 
        let imageElement = document.createElement('img');
        imageElement.setAttribute("src", img);
        imageElement.setAttribute("alt", "Pokemon image");

        //create all of the modal elements defined above 
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        //make the modal visible on click
        modalContainer.classList.add('is-visible');

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
    }

    //hide modal function (by removing is-visible class)
    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon.name, pokemon.name + "'s height is: " + pokemon.height, pokemon.imageURL);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(function () {
    //go to the pokemonRepository variable which should return the pokemon list via .gitAll*key is it's a funciton needs () and perform a forEach loop through each parameter of the pokemonRepo
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});