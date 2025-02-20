import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { Spinner } from '@/app/Spinner'
import { Headline } from './Headline'
import { Link } from 'react-router'

export const EvolutionChain = ({ type, url }) => {
  const { data, isLoading } = useSWR(() => url, fetcher)

  const renderEvolutionChain = (chain) => {
    console.log('chain', chain.species.name)

    return (
      <div className="flex flex-col items-center">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Link to={`/pokemon/${chain.species.name}`} className="text-lg font-bold capitalize">
            {chain.species.name}
          </Link>
        </div>

        {chain.evolves_to.length > 0 && (
          <>
            <div className="h-8 w-1 bg-gray-300"></div>
            <div className="flex gap-8">
              {chain.evolves_to.map((evolution) => (
                <div key={evolution.species.url} className="flex flex-col items-center">
                  {renderEvolutionChain(evolution)}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-5">
        <Spinner type={type} />
      </div>
    )
  }

  if (data) {
    return <>{renderEvolutionChain(data.chain)}</>
  }
}
