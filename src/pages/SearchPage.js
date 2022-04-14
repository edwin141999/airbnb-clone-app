import CityName from "../components/CityName";
import Edit from "../components/Edit";
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
    if (selectCity !== '' && totalGuests !== 0) {
      setIsSearch(true)
      setFilterStays(filterGuests().filter(data => data.maxGuests >= totalGuests))
      setOnPressed(false)
    }
  }

  return (
    <div>
      <div className="md:hidden">
        <Edit />
      </div>
      <div className="px-3 md:pt-20 md:px-20 grid grid-flow-row auto-rows-max md:grid-rows-none md:grid-cols-3 md:divide-x">
        <div className={`border cursor-pointer rounded-t-lg md:shadow md:rounded-r-none md:hover:border md:rounded-l-2xl ${onPressedCity ? 'md:border-gray-600 md:rounded-r-2xl md:rounded-2xl' : null}`} onClick={handleCityClick}>
          <button className={`border-0 flex flex-col text-left text-xs px-6 py-3 ${onPressedCity ? 'font-bold' : 'font-normal'}`}>
            <p className="text-small-xs">LOCATION</p>
            {
              isClicked ? selectCity : 'Add location'
            }
          </button>
        </div>
        <div className={`cursor-pointer rounded-b-lg border md:shadow md:hover:border ${onPressedGuests ? 'md:border-gray-600 md:rounded-2xl' : null}`} onClick={handleGuestsClick}>
          <button className={`border-0 flex flex-col text-left text-xs px-6 md:px-4 py-3 ${onPressedGuests ? 'font-bold' : 'font-normal'}`}>
            <p className="text-small-xs">GUESTS</p>
            {
              isClicked ? totalGuests + ' guests' : 'Add guests'
            }
          </button>
        </div>
        <div className="rounded-r-2xl flex justify-center items-center py-6 md:py-0 md:shadow">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-sm font-normal flex items-center" onClick={handleClickSearch}>
            <span className="material-icons text-white pr-2">
              search
            </span>
            Search
          </button>
        </div>
        {
          onPressedCity ? (
            <div className="border-none row-start-3 md:col-start-1">
              <CityName />
            </div>) : null
        }
        {
          onPressedGuests ? (
            <div className="border-none row-start-3 md:col-start-2">
              <Guests />
            </div>) : null
        }
      </div>
    </div>
  )
}
