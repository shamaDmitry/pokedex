export const TypeBadge = ({ type, name }) => {
  return (
    <div className="rounded-4xl inline-flex items-center">
      <div className="size-5 flex items-center justify-center rounded-full bg-white"></div>
      <span>{name}</span>
    </div>
  )
}
