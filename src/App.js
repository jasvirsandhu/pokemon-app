import { useEffect, useState } from 'react';
import './App.css';
import PokeCard from './Components/PokeCard';
import Search from './Components/Search';
import Axios from 'axios';

function App() {
  const [pokeData, setPokeData] = useState([]);

  const generatePokemon = (urls) => {
      let allPokeData = (urls.map((url) => {
        let generatedPoke = Axios.get(url).then((res) => {
          let pokemon = {
              name: res.data.name, 
              sprite: res.data.sprites.front_default, 
              height: res.data.height, 
              weight: res.data.weight, 
              type: res.data.types.map((type) => `${type.type.name} `),
              colour: res.data.types[0].type.name,
              abilities: res.data.abilities.map((ability) => (
                  <li>{ability.ability.name}</li>
                  )
              ),
              hp: res.data.stats[0].base_stat,
              atk: res.data.stats[1].base_stat,
              def: res.data.stats[2].base_stat,
              specAtk: res.data.stats[3].base_stat,
              specDef: res.data.stats[4].base_stat,
              speed: res.data.stats[5].base_stat
          }
          return pokemon;
        })
        return generatedPoke;
      })
      )
      setPokeData(allPokeData);
}


  const getAllPokeData = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      let pokeData = res.data.results;
      let newPokeData = pokeData.map((poke) => {
        let result = poke.url;
        return result;
      })
      generatePokemon(newPokeData)
     })
}

useEffect(() => getAllPokeData(), []);

  return (
    <>
    <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img height="30" className="poke-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" />
      </a>
    </nav>
    <div className="container">
      <div className="search-container">
      <Search></Search>
        </div>
        <div className="display-cards">{
        pokeData.map((poke) => {
          return (
          <PokeCard 
          pokeName={poke.name}
          img={poke.sprite}
          height={poke.height}
          weight={poke.weight}
          type={poke.type}
          colour={poke.colour}
          abilities={poke.abilities}
          hp={poke.hp}
          atk={poke.atk}
          def={poke.def}
          specAtk={poke.specAtk}
          specDef={poke.specDef}
          speed={poke.speed}>
          </PokeCard>
          )
        })
      }
      </div>
    </div>
    </>
  );
}

export default App;
