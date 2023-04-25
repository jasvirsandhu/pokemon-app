import React from "react";

function ResultList( {results}) {
    return (
        <div className="poke-list">
    {
        results.map((poke) => {
            return <div key={poke.name}>{poke.name}</div>
        })
    }
    </div>
    )
}

export default ResultList;