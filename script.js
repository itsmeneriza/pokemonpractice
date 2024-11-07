fetchData();

async function fetchData(){
  try{
    const pokemonName= document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status} ${response.statusText}`;
      throw new Error(message); // Throw an error to be caught
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById(pokemonSprite);
    
    imgElementsrc = pokemonSprite;
    imgElement.style.display = "block";

  }catch(error){
    console.error(error);
  }
}
