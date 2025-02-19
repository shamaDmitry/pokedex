import { FavoritesIcon } from '@/icons/FavoritesIcon'
import { BackIcon } from '@/icons/BackIcon'
import { getIcon } from '@/lib/colorMap'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { cn, getKeyByValue } from '../lib/utils'
import { COLORS, getColor } from '../lib/colorMap'

const bgColors = {
  '#5090D6': 'before:bg-water',
  '#0B6DC3': 'before:bg-dragon',
  '#F4D23C': 'before:bg-electric',
  '#EC8FE6': 'before:bg-fairy',
  '#5269AD': 'before:bg-ghost',
  '#FF9D55': 'before:bg-fire',
  '#73CEC0': 'before:bg-ice',
  '#63BC5A': 'before:bg-grass',
  '#91C12F': 'before:bg-bug',
  '#CE416B': 'before:bg-fighting',
  '#919AA2': 'before:bg-normal',
  '#5A5465': 'before:bg-dark',
  '#5A8EA2': 'before:bg-steel',
  '#C5B78C': 'before:bg-rock',
  '#FA7179': 'before:bg-psychic',
  '#D97845': 'before:bg-ground',
  '#B567CE': 'before:bg-poison',
  '#89AAE3': 'before:bg-flying'
}

export const PokemonPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  if (!data) return null
  console.log('getColor(COLORS, data.types[0].type.name)', getColor(COLORS, data.types[0].type.name))

  return (
    <div className="min-h-screen relative">
      <div
        className={cn(
          'flex flex-col items-center justify-end h-[307px] before:absolute before:size-[500px] before:rounded-full before:-top-[250px] before:left-1/2 before:-translate-x-1/2',
          `${bgColors[getColor(data.types[0].type.name)]}`
        )}
      >
        {getIcon(data.types[0].type.name, {
          className: 'h-[200px] absolute left-1/2 -translate-x-1/2 trans text-white opacity-60 top-5'
        })}

        <img src={data.sprites.front_default} alt="" className="relative w-[200px]" />
      </div>

      <div className="absolute top-0 left-0 p-4 flex items-center justify-between w-full">
        <button onClick={() => navigate(-1)} className="size-8 flex items-center justify-center py-3 px-4 text-white">
          <BackIcon className="h-3.5 shrink-0" />
        </button>

        <button>
          <FavoritesIcon className="text-white" />
        </button>
      </div>

      <div className="p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quae maxime sunt aut ipsum illo, iusto enim
        nobis ab eaque odit sapiente voluptatibus! Vel, non maxime at nemo eaque illo. Officiis placeat vero, unde est,
        eaque quaerat perferendis iusto adipisci repellendus tenetur provident laborum cum rerum, cupiditate explicabo
        sint alias veritatis. Nulla eaque, quisquam ea quasi tenetur quae officia laudantium. Laborum sunt earum
        assumenda nisi optio, vel fugit deserunt quibusdam, hic aut deleniti nobis maiores perferendis ipsum quas cumque
        soluta voluptas. Fugiat saepe asperiores itaque vero a, ab necessitatibus laudantium? Tempora, at? Optio officia
        aliquam minima nam, nemo distinctio quam illum accusantium error magni, eius dolor quia itaque cupiditate? Quas,
        exercitationem sunt laboriosam officiis tempore doloribus quidem fuga illum voluptate. Temporibus eaque velit
        necessitatibus autem rem minus magnam libero, accusantium repellat reprehenderit quas et veniam laborum
        blanditiis eos. Veritatis quod, eveniet animi temporibus enim delectus aspernatur expedita deserunt consectetur
        quos. Ducimus nobis placeat deleniti magni est ut id enim exercitationem amet, pariatur tempore soluta animi
        porro aspernatur officiis quo. Dignissimos molestiae itaque voluptatibus dolore. Dignissimos beatae aperiam
        aliquam assumenda voluptatum. Tempora harum voluptatum voluptas ab nobis, porro voluptates? Iste maxime officiis
        quod, voluptatibus enim, nulla dicta minima aut ipsam architecto, vero tempora temporibus eos. Rem ratione
        molestiae animi tempore repellat? Deleniti ea impedit hic sit est voluptas, possimus, quis neque perspiciatis
        ipsam corrupti architecto consequuntur, saepe recusandae fugiat et facere. Neque tenetur, ducimus non quod eos
        aliquid repellendus eligendi reprehenderit? Unde possimus nisi veniam amet aliquam sed, animi vero ratione
        placeat incidunt sequi dolorum natus sit. Reiciendis, id ipsum? Harum odio quia eveniet iste ullam dignissimos
        iure a autem expedita. Assumenda ut provident ullam aliquam saepe dolorem rerum officia deserunt atque facilis
        tempore, eos blanditiis impedit officiis vero eligendi exercitationem laboriosam temporibus dolores quam unde
        iure dicta expedita! Repellat, praesentium. Doloribus officiis molestiae nobis. Temporibus suscipit nesciunt
        dolor. Fugit dignissimos tempore cum quasi? Facere rem laborum sint! Unde inventore non voluptatibus. In,
        veniam. Id, voluptatibus perspiciatis inventore dicta aperiam quo. Non quaerat nam deserunt sed consequatur?
        Accusamus sunt eveniet iste iusto. Veniam, vitae mollitia adipisci obcaecati iste eos similique omnis esse
        possimus nemo exercitationem, sequi doloremque laboriosam reiciendis id magnam? Fugit, nulla amet! Itaque error
        perferendis, quam nesciunt ex reprehenderit dolor rerum vitae aspernatur facilis atque soluta, corporis
        accusantium tenetur, quaerat perspiciatis similique? Earum, voluptatem ea. Eos eum nostrum tempora! Provident,
        esse consequatur consectetur perferendis voluptatem tempore voluptatibus eveniet magnam ullam non adipisci
        maxime sapiente quaerat magni itaque eum unde quae nesciunt doloribus reprehenderit voluptas ipsam! Asperiores
        dolorum temporibus laudantium! In harum facilis magnam, repudiandae nulla qui modi quaerat ullam porro
        exercitationem a provident dicta ipsam atque. Beatae quis molestiae at! Sit quo culpa architecto sequi nulla ab
        accusantium incidunt! Eligendi veritatis facilis tenetur molestiae dignissimos nostrum culpa iure voluptatibus
        beatae commodi accusamus, enim eius exercitationem cum repellendus explicabo qui iusto laborum! Ducimus
        excepturi minima beatae. Ea doloribus est necessitatibus? Facilis odit debitis est dolores esse. Quibusdam
        voluptatem minus dignissimos ipsam? Veritatis exercitationem, omnis error iste amet inventore laboriosam ut
        deserunt sunt cumque vel voluptate eligendi commodi repellat, et natus. Distinctio deleniti commodi maiores
        nostrum sit, maxime consectetur. Excepturi dicta placeat fugiat enim quae alias, tenetur mollitia iure
        consectetur facilis laboriosam quidem numquam nemo minima quia ea optio voluptatem laudantium. Itaque, quaerat
        quis, molestias autem ex laboriosam reprehenderit nisi quam id, voluptatum harum? Atque obcaecati autem
        veritatis quis ut eaque, ab maiores esse aspernatur numquam nihil sunt necessitatibus tempore quod? Perferendis
        atque illum facilis non qui ducimus, eaque consequuntur minus, nihil error amet officiis consectetur ipsa
        dolores autem voluptate voluptates quia impedit? Optio aut itaque delectus laborum iusto! Voluptas, repudiandae?
        Magnam, dignissimos ratione? Animi minima saepe totam, minus, distinctio porro dolores nisi quisquam magnam
        dolor possimus culpa voluptates sed, adipisci excepturi! Quia ea ullam voluptatum. Obcaecati porro repellendus
        odio nisi. Qui aperiam totam harum nesciunt dolorem quidem iste sequi tenetur obcaecati rerum, a mollitia
        distinctio est provident aliquam nobis adipisci voluptate quos, aliquid, non odit perferendis reiciendis
        eveniet. Omnis, inventore. Iste placeat nulla id nam ipsa quisquam labore nemo, amet repellendus odit ipsam
        soluta quia earum laboriosam voluptatum animi, recusandae cum minima alias architecto. Enim totam nemo
        exercitationem quia reprehenderit? Magni, quam vero. Molestiae dolore eum distinctio expedita mollitia quisquam,
        amet vel ullam quam hic non itaque, porro sunt repellat harum. Aspernatur similique harum architecto est
        officiis optio tempore deserunt. Libero veniam accusantium consectetur ducimus eveniet ea voluptate facere hic
        quam saepe repudiandae, dolores natus unde? Commodi, nulla voluptatum. Doloremque reprehenderit facere
        laudantium quam voluptatem voluptas libero et exercitationem eligendi?
      </div>
    </div>
  )
}
