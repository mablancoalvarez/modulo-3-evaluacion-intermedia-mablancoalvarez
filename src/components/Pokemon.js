import React from 'react';

const Pokemon = (props) => {

    return (
        <li className="pokemonList">

            <img src={props.url}></img>
            <div className="pokemonList__info">
                <h1>{props.name}</h1>
           
            <ul className="powers">
                {props.pokemonsingle.map((singlePokemon, index) =>
                    <li key= {props.id}>
                        {singlePokemon}
                    </li>
                )}

            </ul>
            </div>
        </li>
    )
}




export default Pokemon;