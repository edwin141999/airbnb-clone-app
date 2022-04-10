import { createContext, useContext, useEffect, useState } from 'react'

const roomContext = createContext()

export const useRoom = () => {
  return useContext(roomContext)
}

export const RoomProvider = ({ children }) => {

  const [location, setLocation] = useState([])
  const [onPressedCity, setOnPressedCity] = useState(false);
  const [onPressedGuests, setOnPressedGuests] = useState(false);
  const [onPressed, setOnPressed] = useState(false);
  const [selectCity, setSelectCity] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [totalGuests, setTotalGuests] = useState(0);

  useEffect(() => {
    fetch('stays.json')
      .then(res => res.json())
      .then(data => setLocation(data))
  }, [])

  const citys = () => {
    return [...new Set(location.map(data => data.city + ', ' + data.country))];
  }

  const maxGuests = () => {
    const filter = location.filter(data => data.city === selectCity.split(',')[0]);
    return Math.max(...filter.map(data => data.maxGuests));
  }

  return <roomContext.Provider value={
    { location, setLocation, citys, onPressedCity, setOnPressedCity, onPressedGuests, setOnPressedGuests, onPressed, setOnPressed, selectCity, setSelectCity, isClicked, setIsClicked, totalGuests, setTotalGuests, maxGuests }
  }>
    {children}
  </roomContext.Provider>
}