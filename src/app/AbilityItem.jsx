import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { Spinner } from '@/app/Spinner'
import { cn } from '../lib/utils'

export const AbilityItem = ({ type, url, className }) => {
  const { data, isLoading } = useSWR(url, fetcher)

  const name = data?.names.filter((item) => item.language.name === 'en')
  const effect = data?.effect_entries.filter((item) => item.language.name === 'en')

  if (isLoading)
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner type={type} />
      </div>
    )

  if (data) {
    return (
      <div
        className={cn(
          'border cursor-help rounded-2xl p-2 font-medium border-black/10 text-center text-black/90 text-lg',
          className
        )}
        title={effect[0].short_effect}
      >
        {name[0].name}
      </div>
    )
  }
}
