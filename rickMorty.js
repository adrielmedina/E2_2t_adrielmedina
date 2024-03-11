let characters = document.querySelector("#characters");

fetch("https://rickandmortyapi.com/api/character")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.results);

    data.results.forEach((item) => {
      const content = document.createElement("div");
      content.classList.add("character-card");

      content.innerHTML = `
        <img class="character-image" src="${item.image}" alt="${item.name}">
        <h4 class="character-name">${item.name}</h4>
        <div class="character-info">
          <p><strong>Especie:</strong> ${item.species}</p>
          <p><strong>Estado:</strong> ${item.status}</p>
          <p><strong>Género:</strong> ${item.gender}</p>
          <p><strong>Origen:</strong> ${item.origin.name}</p>
          <p><strong>Ubicación:</strong> ${item.location.name}</p>
          <p><strong>Episodios:</strong> ${item.episode.length}</p>
        </div>
      `;
      characters.append(content);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });