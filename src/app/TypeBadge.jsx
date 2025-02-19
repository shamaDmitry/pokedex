import { COLORS, getIcon } from '../lib/colorMap'

export const TypeBadge = ({ type }) => {
  return (
    <div
      className="rounded-4xl flex items-center justify-center py-[3px] px-1.5 gap-2 text-sm"
      style={{ backgroundColor: COLORS[type] }}
    >
      <div className="size-7 flex items-center justify-center rounded-full bg-white p-1">
        {getIcon(type, { style: { color: COLORS[type] }, className: 'h-full' })}
      </div>

      <span className="capitalize">{type}</span>
    </div>
  )
}
