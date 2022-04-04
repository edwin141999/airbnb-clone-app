export default function Card({ children }) {
  return (
    <div className="max-w-sm py-5">
      <img src={children.photo} alt="Depa" className="w-full object-cover h-64 rounded-3xl" />
      <div className="py-4 flex justify-between">
        <div>
          {
            children.superHost ? <button className="bg-transparent border rounded-xl border-gray-700 text-gray-700 hover:text-gray-800 px-2 py-1 text-xs">SUPER HOST</button> : null
          }
          <span className={`${children.superHost ? 'px-2' : null} text-sm text-gray-600`}>{children.type}. {
            children.beds ? children.beds + ' beds' : null
          }</span>
        </div>
        <div className="flex items-stretch">
          <span className="material-icons text-orange-500">
            star_rate
          </span>
          <span className="text-sm self-center">{children.rating}</span>
        </div>
      </div>
      <p className="truncate">{children.title}</p>
    </div>
  )
}
