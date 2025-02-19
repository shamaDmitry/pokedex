import { Water } from '@/icons/elements/Water.jsx'
import { Dragon } from '@/icons/elements/Dragon.jsx'
import { Electric } from '@/icons/elements/Electric.jsx'
import { Fairy } from '@/icons/elements/Fairy.jsx'
import { Ghost } from '@/icons/elements/Ghost.jsx'
import { Fire } from '@/icons/elements/Fire.jsx'
import { Ice } from '@/icons/elements/Ice.jsx'
import { Grass } from '@/icons/elements/Grass.jsx'
import { Bug } from '@/icons/elements/Bug.jsx'
import { Fighting } from '@/icons/elements/Fighting.jsx'
import { Normal } from '@/icons/elements/Normal.jsx'
import { Dark } from '@/icons/elements/Dark.jsx'
import { Steel } from '@/icons/elements/Steel.jsx'
import { Rock } from '@/icons/elements/Rock.jsx'
import { Psychic } from '@/icons/elements/Psychic.jsx'
import { Ground } from '@/icons/elements/Ground.jsx'
import { Poison } from '@/icons/elements/Poison.jsx'
import { Flying } from '@/icons/elements/Flying.jsx'

export const COLORS = {
  water: '#5090D6',
  dragon: '#0B6DC3',
  electric: '#F4D23C',
  fairy: '#EC8FE6',
  ghost: '#5269AD',
  fire: '#FF9D55',
  ice: '#73CEC0',
  grass: '#63BC5A',
  bug: '#91C12F',
  fighting: '#CE416B',
  normal: '#919AA2',
  dark: '#5A5465',
  steel: '#5A8EA2',
  rock: '#C5B78C',
  psychic: '#FA7179',
  ground: '#D97845',
  poison: '#B567CE',
  flying: '#89AAE3'
}

export const getColor = (type) => {
  return COLORS[type]
}

export const getColorWithOpacity = (type, opacity) => {
  const hexColor = COLORS[type]
  if (!hexColor) {
    return null
  }

  // Remove the # if present
  const hex = hexColor.replace('#', '')

  // Convert the hex to RGB values
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Return the rgba string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export const getIcon = (type, { style, className }) => {
  switch (type) {
    case 'water':
      return <Water style={style} className={className} />
    case 'dragon':
      return <Dragon style={style} className={className} />
    case 'electric':
      return <Electric style={style} className={className} />
    case 'fairy':
      return <Fairy style={style} className={className} />
    case 'ghost':
      return <Ghost style={style} className={className} />
    case 'fire':
      return <Fire style={style} className={className} />
    case 'ice':
      return <Ice style={style} className={className} />
    case 'grass':
      return <Grass style={style} className={className} />
    case 'bug':
      return <Bug style={style} className={className} />
    case 'fighting':
      return <Fighting style={style} className={className} />
    case 'normal':
      return <Normal style={style} className={className} />
    case 'dark':
      return <Dark style={style} className={className} />
    case 'steel':
      return <Steel style={style} className={className} />
    case 'rock':
      return <Rock style={style} className={className} />
    case 'psychic':
      return <Psychic style={style} className={className} />
    case 'ground':
      return <Ground style={style} className={className} />
    case 'poison':
      return <Poison style={style} className={className} />
    case 'flying':
      return <Flying style={style} className={className} />
  }
}
