import CityName from "../components/CityName";

export default function SearchPage() {
  return (
    <div className="py-20 px-7 grid grid-cols-3 divide-x">
      <button className="rounded-l-2xl focus:border-gray-600 focus:rounded-2xl hover:border border shadow flex flex-col text-left text-xs px-6 py-3 font-normal focus:font-bold"><p className="text-small-xs">LOCATION</p>Helsinki, Finland</button>
      <button className="focus:border-gray-600 focus:rounded-2xl border shadow flex flex-col text-left text-xs px-4 py-3 font-normal focus:font-bold"><p className="text-small-xs">GUESTS</p>4 guests</button>
      <div className="rounded-r-2xl shadow flex justify-center items-center ">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-sm font-normal flex items-center">
          <span className="material-icons text-white pr-2">
            search
          </span>
          Search
        </button>
      </div>
      <div>
        <CityName />
      </div>
    </div>
  )
}
