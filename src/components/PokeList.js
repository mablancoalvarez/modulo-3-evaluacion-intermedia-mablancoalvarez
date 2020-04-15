import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

const PokeList = (props) => {

    return (

        <ul className="pokemonInfo">
            {props.dataList.map((pokemonObject) =>

                <Pokemon key={pokemonObject.id}
                    url={pokemonObject.url}
                    name={pokemonObject.name}
                    pokemonsingle={pokemonObject.types}
                />
            )}
        </ul>
    )  
    
}
    PokeList.propTypes = {
    name: PropTypes.string,
  } 

export default PokeList;