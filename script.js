document.addEventListener("DOMContentLoaded", function () {
    // URL de la API de Rick and Morty para obtener información de personajes
    const apiUrl = 'https://rickandmortyapi.com/api/character/';

    // Elemento donde se mostrarán los personajes
    const characterList = document.getElementById('character-list');

    // Realiza una solicitud GET a la API utilizando fetch
    fetch(apiUrl)
        .then(response => {
            // Verifica si la solicitud fue exitosa (código de respuesta 200)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Convierte la respuesta JSON en un objeto JavaScript
            return response.json();
        })
        .then(data => {
            // Recorre los personajes y muestra la información
            data.results.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');
                characterCard.innerHTML = `
                    <h2>${character.name}</h2>
                    <img src="${character.image}" alt="${character.name}">
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                `;
                characterList.appendChild(characterCard);
            });
        })
        .catch(error => {
            console.error(`Hubo un error: ${error.message}`);
        });
});
