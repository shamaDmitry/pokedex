import { cn } from '@/lib/utils'
import { getColor } from '../lib/colorMap'

export const Spinner = ({ className, type }) => {
  return (
    <div
      style={{ borderColor: getColor(type) }}
      className={cn('animate-spin rounded-full size-6 border-4 border-blue-500 !border-t-transparent', className)}
    />
  )
}
