import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value)
}

export const formatPokemonId = (id) => {
  return String(id).padStart(3, '0')
}
