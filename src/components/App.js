import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=(pokemons)

  }

  render() {
    return (
      <div className="App">
        <h1 className="main_title"> Mi lista de Pokemons</h1>
        <PokeList dataList={this.state} />
      </div>
    );
  }
}

export default App;
