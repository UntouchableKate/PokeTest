import React from "react";

import fetchPokemons from "../../services/api-services";

jest.mock("node-fetch");
import {fetch} from "node-fetch";

const { Response } = jest.requireActual("node-fetch");
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

describe("fetch GET", () => {
  let response;
  let pokemons;

  beforeEach(() => {
    pokemons = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
      { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
      { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
      { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    ];

    response= {
      data: {
        pokemons
      }
    }
  });

  test("should return pokemons list from backend", async () => {
    fetch.mockReturnValue(Promise.resolve(new Response(response)));

    const poke = await fetchPokemons();
    expect(poke).toEqual(pokemons);
});
   });
