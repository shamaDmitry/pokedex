import { TypeBadge } from './TypeBadge'

export const PokemonCard = () => {
  return (
    <div>
      <div>
        <p>Nº025</p>
        <div>Pikachu</div>

        <div>
          <TypeBadge name="Electric" />
        </div>
      </div>
    </div>
  )
}
