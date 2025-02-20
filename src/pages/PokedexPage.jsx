import { PokemonCard } from '../app/PokemonCard'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

export const PokedexPage = () => {
  const [data, setData] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const json = await response.json()

      const pokemonPromises = json.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))

      const pokemonData = await Promise.all(pokemonPromises)
      setData(pokemonData)
      setNextUrl(json.next)
      setPreviousUrl(json.previous)
    } catch (error) {
      console.error('Error fetching Pokémon data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const loadMore = async () => {
    if (nextUrl && !loading) {
      await fetchData(nextUrl)
    }
  }

  const loadPrevious = async () => {
    if (previousUrl && !loading) {
      await fetchData(previousUrl)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4">
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} data={pokemon} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={loadPrevious}
          disabled={!previousUrl || loading}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mr-2 disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={loadMore}
          disabled={!nextUrl || loading}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r disabled:opacity-50"
        >
          Load More
        </button>
      </div>
    </>
  )
}
