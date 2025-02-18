import { PokemonCard } from '../app/PokemonCard'
import { COLORS } from '../lib/colorMap'

export const PokedexPage = () => {
  return (
    <div>
      {Object.keys(COLORS).map((type) => (
        <div key={type} style={{ backgroundColor: COLORS[type] }} className="p-2 text-white">
          {type}
        </div>
      ))}

      <PokemonCard />
    </div>
  )
}
