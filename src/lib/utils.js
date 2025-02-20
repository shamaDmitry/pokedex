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

export const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
