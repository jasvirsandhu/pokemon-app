import styled from '@emotion/styled';
import { ProgressBar } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


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

        const Title = styled.h1`
        margin-top: 5px;
        color: black;
        font-family: "Open Sans Condensed", "Open Sans", helvetica, sans-serif; 
        font-size: 1.5em;    
        font-weight: 600;
        letter-spacing: 0.01em;
        text-transform: uppercase;                            
        `
        const PokeInfo = styled.div`
        margin: 3px;
        font-size: 	13px;
        font-family: "Open Sans Condensed", "Open Sans", helvetica, sans-serif;
        font-weight: 300;
        text-align: left;
        display: inline-flex;
        justify-content: center;
        max-width: 100%;
        `
    return (
        <>
        <Card key={props.pokeName} style={ {backgroundColor: `${typeColour(props.colour)}` } } className="card-container">
            <Card className="bg-overlay" style={ {backgroundColor: 'rgb(255, 255, 255, 0.5)'}}>
                <div className="type-style"><PokeInfo>{props.type}</PokeInfo></div>
                <Title className="poke-name">{props.pokeName}</Title>
                <img className="poke-img" src={props.img} alt="Sprite of selected pokemon"></img>
                <PokeInfo><p className='num-label'>Height:</p><p className='num-style'>{props.height}</p></PokeInfo>
                <PokeInfo><p className='num-label'>Weight:</p><p className='num-style'>{props.weight}</p></PokeInfo>
                <h2 className='abilities a-style'>{props.abilities}</h2>
                <label className="stat-label">Attack: </label><ProgressBar className="progress-width" variant="info" animated now={props.atk} label={props.atk}></ProgressBar>
                <label className="stat-label">Defense: </label><ProgressBar className="progress-width" variant="info" animated now={props.def} label={props.def}></ProgressBar>
                <label className="stat-label">Special Attack: </label><ProgressBar className="progress-width" variant="info" animated now={props.specAtk} label={props.specAtk}></ProgressBar>
                <label className="stat-label">Special Defense: </label><ProgressBar className="progress-width" variant="info" animated now={props.specDef} label={props.specDef}></ProgressBar>
                <label className="stat-label">Speed: </label><ProgressBar className="progress-width" variant="info" animated now={props.speed} label={props.speed}></ProgressBar>
            </Card>
        </Card>
        </>
    )
}

export default PokeCard