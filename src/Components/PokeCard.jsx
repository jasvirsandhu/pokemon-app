function PokeCard (props) {

    const typeColour = (type) => {
        switch (type) {
          case "normal":
            return "#A8A77A";
          case "fighting":
            return "#C22E28";
          case "flying":
            return "#A98FF3";
          case "poison":
            return "#A33EA1";
          case "ground":
            return "#E2BF65";
          case "rock":
            return "#B6A136";
          case "bug":
            return "#A6B91A";
          case "ghost":
            return "#735797";
          case "steel":
            return "#B7B7CE";
          case "fire":
            return "#EE8130";
          case "water":
            return "#6390F0";
          case "grass":
            return "#7AC74C";
          case "electric":
            return "#F7D02C";
          case "psychic":
            return "#F95587";
          case "ice":
            return "#96D9D6";
          case "dragon":
            return "#6F35FC";
          case "dark":
            return "#705746";
          case "fairy":
            return "#D685AD";
          case "unknown":
            return "#3C5AA6";
          case "shadow":
            return "#978CAE"; 
          default:
        }};


    return (
        <>
        <div style={ {backgroundColor: `${typeColour(props.colour)}` } } className="card-container">
        <h1>{props.pokeName}</h1>
        <img className="poke-img" src={props.img} alt="Sprite of selected pokemon"></img>
        <h3>Type: {props.type}</h3>
        <h4>Height: {props.height}</h4>
        <h4>Weight: {props.weight}</h4>
        <h4>Abilities: {props.abilities}</h4>
        <h3>Base Stats:</h3>
        <h5>HP: {props.hp}</h5>
        <h5>Attack: {props.atk}</h5>
        <h5>Defense: {props.def}</h5>
        <h5>Special Attack: {props.specAtk}</h5>
        <h5>Special Defense: {props.specDef}</h5>
        <h5>Speed: {props.speed}</h5>
        </div>
        </>
    )
}

export default PokeCard