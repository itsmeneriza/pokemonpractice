async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite; // Set the image source
        imgElement.style.display = "block"; // Show the image

    } catch (error) {
        console.error(error);
        alert("An error occurred: " + error.message); // Inform the user
    }
}
