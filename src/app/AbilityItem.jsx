import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import Spinner from '@/app/Spinner'

export const AbilityItem = ({ url }) => {
  const { data, isLoading } = useSWR(url, fetcher)

  const name = data?.names.filter((item) => item.language.name === 'en')
  const effect = data?.effect_entries.filter((item) => item.language.name === 'en')

  if (isLoading) return <Spinner />

  if (data)
    return (
      <div
        className="border cursor-help rounded-2xl p-2 font-medium border-black/10 text-center text-black/90 text-lg"
        title={effect[0].short_effect}
      >
        {name[0].name}
      </div>
    )
}
