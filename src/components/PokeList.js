import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {

    return (
        <ul className="pokemonInfo">
            {props.dataList.map((pokemonObject, index) =>

                <Pokemon key={index}
                    url={pokemonObject.url}
                    name={pokemonObject.name}
                    pokemonsingle={pokemonObject.types}

                />
            )}



        </ul>







    )
}













export default PokeList;