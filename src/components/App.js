import React from 'react';
import '../stylesheets/App.css';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  
  }

  render() 
  {console.log(this.state)
    return (
      <div className="App">
        <PokeList dataList={pokemons}/>
        
      </div>
    );
  }
}

export default App;
