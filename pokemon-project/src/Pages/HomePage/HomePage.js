import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//services
import api from '../../services/api-services';

//routes
import routes from '../../routes';

class HomePage extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    try {
      api.fetchPokemons().then(data => {
        this.setState({ pokemons: data.results });
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  render() {
    return (
      <>
        <div className="homePage-wrapper">
          <div className="homePage-title-wrapper">
          <h1 className="homePage-title--blue">Pokemon</h1>
          </div>
          <ul className="homePage-list">
            {this.state.pokemons.map(pokemon => (
              <li key={pokemon.name} >
                <Link className="homePage-list__item"
                  to={{
                    pathname: `${routes.DETAILS}/${pokemon.name}`,
                    state: { pokemon: pokemon },
                  }}
                >
                    <p className="homePage-list__content">{pokemon.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default HomePage;
