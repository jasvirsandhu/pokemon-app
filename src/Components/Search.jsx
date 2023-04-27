import { useState } from "react";
import  Axios from "axios";
import PokeCard from "./PokeCard";
import { CiSearch } from "react-icons/ci";

function Search () {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [input, checkInput] = useState(false);

    const handleChange = (value) => {
        setPokemonName(value)
    }

    const generatePokemon = (res) => {
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
    }

    const search = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemon(generatePokemon(res));
            checkInput(true);
        })
    }

    return (
        <>
        <div className="search-container">
            <input className="search-bar"
            placeholder="Enter Pokemon Name" 
            value={pokemonName} 
            onChange={(event) => {
                handleChange(event.target.value);
            }}/>
            <button className="btn" onClick={search}><CiSearch size={30} className="btn-icon"></CiSearch></button>
        </div>
        <div className="poke-card">
            {!input ? <h2 className="initial-msg">Choose Your Pokemon!</h2> : 
            <PokeCard className="chosen-poke"
            pokeName={pokemon.name}
            img={pokemon.sprite}
            height={pokemon.height}
            weight={pokemon.weight}
            type={pokemon.type}
            colour={pokemon.colour}
            abilities={pokemon.abilities}
            hp={pokemon.hp}
            atk={pokemon.atk}
            def={pokemon.def}
            specAtk={pokemon.specAtk}
            specDef={pokemon.specDef}
            speed={pokemon.speed}>
            </PokeCard>
            }
        </div>
        </>
    );
    
}

export default Search;