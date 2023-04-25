import React from "react";
import { useState } from "react";
import  Axios from "axios";
import PokeCard from "./PokeCard";

function Search () {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState({});

    const handleChange = (value) => {
        setPokemonName(value)
        // fetchData(value)
    }

    const search = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemon({
                name: res.data.name, 
                sprite: res.data.sprites.front_default, 
                height: res.data.height, 
                weight: res.data.weight, 
                type: res.data.types.map((type) => type.type.name),
                colour: res.data.types[0].type.name,
                abilities: res.data.abilities.map((ability) => (
                    <li>{ability.ability.name}</li>)
                ),
                hp: res.data.stats[0].base_stat,
                atk: res.data.stats[1].base_stat,
                def: res.data.stats[2].base_stat,
                specAtk: res.data.stats[3].base_stat,
                specDef: res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat
            })
        })
    }

    return (
        <>
        <div>
            <input 
            placeholder="Enter Pokemon Name" 
            value={pokemonName} 
            onChange={(event) => {
                handleChange(event.target.value);
            }}
            />
            <button onClick={search}>Search</button>
        </div>
        <div className="poke-card">
            <PokeCard 
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
        </div>
        </>
    );
    
}

export default Search;