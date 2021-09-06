import React, { Component } from 'react';
import PropTypes from 'prop-types';

//routes
import routes from '../../routes';

//components
import Loader from '../../Components/Loader';

class DetailsPage extends Component {
  static propTypes = {
      location: PropTypes.shape({
        state: PropTypes.objectOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          }),
        ),
      }),
  };

  state = {
    pokemon: [],
    pokemonFhotoUrl: '',
    isLoading: true,
  };

  componentDidMount() {
    const pokeDetails = this.props.location.state;
    const pokeUrl = pokeDetails.pokemon.url;

    this.fetchPokemonDetails(pokeUrl);
  }

  fetchPokemonDetails = pokeUrl => {
    try {
      fetch(pokeUrl)
        .then(res => res.json())
        .then(data => {
          this.setState({
            pokemon: data,
            pokemonFhotoUrl: data.sprites.front_default,
            isLoading: false,
          });
        });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  goBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);

      return;
    }

    this.props.history.push(routes.HOME);
  };

  render() {
    const { pokemon, pokemonFhotoUrl, isLoading } = this.state;
    return (
      <div className="detail-wrapper">
        {isLoading && <Loader />}

        <div className="detail-btn-wrapper">
          <button type="button" onClick={this.goBack} className="detail-btn__button">
            go back
          </button>
        </div>
        <div className="detail-content-wrapper">
          <img src={pokemonFhotoUrl} alt="pokemonImage" className="detail-content__image" />
          <p className="detail-content__name">{pokemon.name}</p>
        </div>
      </div>
    );
  }
}

export default DetailsPage;
