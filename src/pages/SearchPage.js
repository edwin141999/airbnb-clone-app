import CityName from "../components/CityName";
import Guests from "../components/Guests";
import { useRoom } from "../context/roomContext";

export default function SearchPage() {

  const { onPressedCity, setOnPressedCity, onPressedGuests, setOnPressedGuests, isClicked, selectCity, totalGuests, setIsSearch, setFilterStays, filterGuests, setOnPressed } = useRoom()

  const handleCityClick = () => {
    setOnPressedCity(true);
    setOnPressedGuests(false);
  };

  const handleGuestsClick = () => {
    setOnPressedGuests(true);
    setOnPressedCity(false);
  };

  const handleClickSearch = () => {
    setIsSearch(true)
    setFilterStays(filterGuests().filter(data => data.maxGuests >= totalGuests))
    setOnPressed(false)
  }

  return (
    <div className="pt-20 px-20 grid grid-cols-3 divide-x">
      <button className={`rounded-l-2xl hover:border border shadow flex flex-col text-left text-xs px-6 py-3 ${onPressedCity ? 'font-bold border-gray-600 rounded-2xl' : 'font-normal'} `} onClick={handleCityClick}>
        <p className="text-small-xs">LOCATION</p>
        {
          isClicked ? selectCity : 'Add location'
        }
      </button>
      <button className={`border shadow flex flex-col text-left text-xs px-4 py-3 ${onPressedGuests ? 'border-gray-600 rounded-2xl font-bold' : 'font-normal'}`} onClick={handleGuestsClick}>
        <p className="text-small-xs">GUESTS</p>
        {
          isClicked ? totalGuests + ' guests' : 'Add guests'
        }
      </button>
      <div className="rounded-r-2xl shadow flex justify-center items-center">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-sm font-normal flex items-center" onClick={handleClickSearch}>
          <span className="material-icons text-white pr-2">
            search
          </span>
          Search
        </button>
      </div>
      {
        onPressedCity ? (
          <div className="border-none col-start-1">
            <CityName />
          </div>) : null
      }
      {
        onPressedGuests ? (
          <div className="border-none col-start-2">
            <Guests />
          </div>) : null
      }
    </div>
  )
}
