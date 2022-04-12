import { useEffect } from "react";
import { useRoom } from "../context/roomContext";

export default function Guests() {
  const { setTotalGuests, isClicked, totalAdults, setTotalAdults, totalChildren, setTotalChildren } = useRoom()

  const handleCLickAddAdult = () => {
    if (isClicked) setTotalAdults(totalAdults + 1);
  }

  const handleCLickSubstractAdult = () => {
    if (totalAdults !== 0 && isClicked) setTotalAdults(totalAdults - 1);
  }

  const handleCLickAddChildren = () => {
    if (isClicked) setTotalChildren(totalChildren + 1);
  }

  const handleCLickSubstractChildren = () => {
    if (totalChildren !== 0 && isClicked) setTotalChildren(totalChildren - 1);
  }

  useEffect(() => {
    const total = totalAdults + totalChildren
    setTotalGuests(total)
  }, [totalAdults, totalChildren, setTotalGuests])

  return (
    <div className='pt-10 pb-14 px-5'>
      <div className='pb-12'>
        <span className='text-xs flex flex-col'>
          <p className='text-sm'>Adults</p>
          <span className='text-gray-500'>Ages 13 or above</span>
        </span>
        <div className='pt-3'>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md' onClick={handleCLickSubstractAdult}>-</button>
          <span className='font-semibold px-4'>{totalAdults}</span>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md' onClick={handleCLickAddAdult}>+</button>
        </div>
      </div>
      <div>
        <span className='flex flex-col text-xs'>
          <p className='text-sm'>Children</p>
          <span className='text-gray-500'>Ages 2 - 12</span>
        </span>
        <div className='pt-3'>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md' onClick={handleCLickSubstractChildren}>-</button>
          <span className='font-semibold px-4'>{totalChildren}</span>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md' onClick={handleCLickAddChildren}>+</button>
        </div>
      </div>
    </div>
  )
}