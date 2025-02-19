import { PokemonCard } from '../app/PokemonCard'
import { useEffect } from 'react'
import { useState } from 'react'

export const PokedexPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const pokemonPromises = []
      for (let i = 1; i <= 10; i++) {
        pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()))
      }
      Promise.all(pokemonPromises)
        .then((pokemonData) => {
          setData(pokemonData)
        })
        .catch((error) => {
          console.error('Error fetching Pokémon data:', error)
          // Handle error as needed, e.g., set an error state
        })
    }

    fetchData()
  }, [])

  return (
    <div>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} data={pokemon} />
      ))}
    </div>
  )
}
