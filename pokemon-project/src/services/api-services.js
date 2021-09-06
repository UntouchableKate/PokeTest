 const fetchPokemons = () => {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=9`,
    ).then(res => res.json());
  };

  export default {fetchPokemons};