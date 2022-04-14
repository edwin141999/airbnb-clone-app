import React from 'react'
import { useRoom } from '../context/roomContext'

export default function Edit() {

  const { setOnPressed, setOnPressedCity, setOnPressedGuests } = useRoom()

  const handleClose = () => {
    setOnPressed(false)
    setOnPressedCity(false)
    setOnPressedGuests(false)
  }

  return (
    <div className='flex justify-between px-2 pt-4 pb-3 items-center'>
      <p className='font-semibold text-xs'>Edit your search</p>
      <span className="material-icons cursor-pointer" onClick={handleClose}>
        close
      </span>
    </div>
  )
}
