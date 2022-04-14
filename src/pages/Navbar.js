import { useRoom } from "../context/roomContext";
import SearchPage from '../pages/SearchPage'

export default function Navbar() {
  const { setOnPressedCity, setOnPressedGuests, onPressed, setOnPressed, isClicked, selectCity, totalGuests, setIsSearch, setFilterStays, filterGuests } = useRoom()

  const handleClickCity = () => {
    setOnPressed(true)
    setOnPressedCity(true)
  }

  const handleClickGuest = () => {
    setOnPressed(true)
    setOnPressedGuests(true)
  }

  const handleClickSearch = () => {
    if (selectCity !== '' && totalGuests !== 0) {
      setIsSearch(true)
      setFilterStays(filterGuests().filter(data => data.maxGuests >= totalGuests))
    }
  }

  return (
    <>
      {
        onPressed ? (
          <div className="fixed w-full inset-0 bg-gray-500 bg-opacity-50">
            <div className="shadow-lg bg-white">
              <SearchPage />
            </div>
          </div>
        ) : null
      }
      <div className='md:py-10 py-6 pb-8 md:flex md:justify-between md:items-center md:px-16 px-3'>
        <div className="pb-8 md:pb-0">
          <img src="logo.png" alt="Logo" className='h-full' />
        </div>
        <div className="flex justify-center">
          <div className='rounded-2xl shadow-md py-3 flex divide-x xl:mr-6'>
            <button className='px-3 text-xs self-center font-normal' onClick={handleClickCity}>
              {
                isClicked ? (
                  <p>{selectCity}</p>
                ) :
                  <p className="font-medium text-gray-500">Add location</p>
              }
            </button>
            <button className='px-3 text-xs' onClick={handleClickGuest}>
              {
                isClicked ? (
                  <p className="font-normal">{totalGuests} guests</p>
                ) :
                  <p className="font-medium text-gray-500">Add guests</p>
              }
            </button>
            <span className="material-icons text-orange-500 px-3">
              <button className='font-normal' onClick={handleClickSearch}>
                search
              </button>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}
