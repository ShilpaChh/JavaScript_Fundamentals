// in node

// const fetchPokemon = require('./api.js')
// fetchPokemon('pikachu')
//     .then((pokemon) => console.log(pokemon))


// o/p:
// PhaseTwo git:(main) ✗ curl https://pokeapi.co/api/v2/pokemon/pikachu
// RETURNS a huge amount of data

const fetchPokemon = require('./api')

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        done();
      });
  });
});


// This should log:
// {
//   abilities: [
//     { ability: [Object], is_hidden: false, slot: 1 },
//     { ability: [Object], is_hidden: true, slot: 3 }
//   ],
//   base_experience: 112,
//   forms: [
//     {
//       name: 'pikachu',
//       url: 'https://pokeapi.co/api/v2/pokemon-form/25/'
//     }
//   ],
//   height: 4,
//   held_items: [
//     { item: [Object], version_details: [Array] },
//     { item: [Object], version_details: [Array] }
//   ],
//   id: 25,
//   (etc...)
// }


// in the node REPL

