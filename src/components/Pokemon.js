import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {

    return (
        <li className="pokemonList">

            <img src={props.url} alt={props}></img>
            <div className="pokemonList__info">
                <h2 className="subtitle">{props.name}</h2>
                <ul className="powers">
                    {props.pokemonsingle.map((singlePokemon) =>
                        <li key={props.id}>
                            {singlePokemon}
                        </li>
                    )}
                </ul>
            </div>
        </li>
    )
}

Pokemon.propTypes = {
    name: PropTypes.string,
    img : PropTypes.string,
  } 



export default Pokemon;