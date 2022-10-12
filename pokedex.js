const getPokemons = async () => {
 for (let i = 1; i <=150; i++) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" +i);
    const pokemon = await res.json ();
    // console.log(pokemon)
   //return pokemon;
   pokemonCards.push(pokemon)
}
return pokemonCards;
}

const pokemonCards = [];
 
function mapPokemons (pokemons) {
  const mappedPokedex = pokemons.map(pokemon => ({
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types.map((type) => type.type.name),
      id: pokemon.id,
  }))
    return mappedPokedex
}


const div$$= document.querySelector(".container");
const ol$$= document.querySelector("#pokedex");
 
//const gallery$$ = document.querySelector(".container")
//gallery$$.innerHTML="";
 
const dibujarPokemons = (pokemons) => {
  //gallery$$.innerHTML=` <ol id="pokedex"></ol>`;
  const li$$ = document.createElement ("li");
  ol$$.appendChild (li$$)
  li$$.classList.add ("card")
  const img$$ = document.createElement ("img");
  img$$.setAttribute("src", pokemons.sprites.other.home.front_default);
  img$$.classList.add("card__image")
  li$$.appendChild (img$$);
  const name$$ = document.createElement ("h3");
  name$$.textContent = pokemons.name;
  name$$.classList.add ("card__title")
  li$$.appendChild(name$$)

  const imgbtn$$ = document.createElement ("img");
  imgbtn$$.setAttribute("src" , "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849__480.png");
  imgbtn$$.setAttribute("height" , "100px");
  imgbtn$$.setAttribute("width" , "100px");
  li$$.appendChild(imgbtn$$);
  function remove () {
      li$$.remove();
  }
 
  imgbtn$$.addEventListener("click", remove)

  const id$$ = document.createElement ("p");
  id$$.textContent = pokemons.id,
  id$$.classList.add ("card__id")
  li$$.appendChild(id$$);
if(pokemons.id > 9){
  id$$.classList.add ("card__id2")
}
if(pokemons.id > 99) {
  id$$.classList.add ("card__id3")
}

const type$$ = document.createElement ("p");
for (let i = 0; i < pokemons.types.length; i++) {
    const poke = pokemons.types[i];
    const p$$ = document.createElement ("p");
    p$$.textContent = poke.type.name
    type$$.appendChild(p$$)
    type$$.classList.add ("card__type")
    li$$.appendChild(type$$);
}

 //gallery$$.appendChild(div$$)
}


document.body.appendChild(div$$) 


    const init = async () => {
      const pokemons = await getPokemons ();
      //console.log(pokemons)
        
      const mappedPokedex = mapPokemons(pokemons);
      console.log(mappedPokedex);
       
      for (const pokemon of pokemons) {
      dibujarPokemons(pokemon);
      }
  
    }

   init()


    const h1$$ = document.querySelector("h1");
    const imgh1$$ = document.createElement ("img");
    imgh1$$.setAttribute("src" , "https://pokedexproject1.herokuapp.com/images/Pokedex.png");
    imgh1$$.setAttribute("height" , "200px");
    imgh1$$.setAttribute("width" , "300px");
    h1$$.appendChild(imgh1$$);

    const form$$ = document.querySelector ("form");
    const label$$ = document.querySelector ("label");
    const input$$ = document.createElement("input");
    input$$.setAttribute("type", "search");
    input$$.setAttribute("name" , "search");
    input$$.setAttribute("placeholder","Busca tu Pokemon");
    input$$.classList.add ("container__input");
    label$$.appendChild(input$$);
    div$$.input$$ = document.querySelector("div");
    const button$$ = document.createElement ("button");
    button$$.textContent = "BUSCAR POKEMON";
    button$$.classList.add("container__button");
    label$$.appendChild(button$$);

    
    //ol$$.parentNode.insertBefore(form$$, ol$$);

    
   
function searchPokemon (){
  const filteredPokemon = pokemonCards.filter(pokemons => pokemons.name.toLowerCase().includes(input$$.value.toLowerCase()))
  console.log(filteredPokemon);
  
}   

button$$.addEventListener("click",searchPokemon)
