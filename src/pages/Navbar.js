import { useState } from "react";
import SearchPage from '../pages/SearchPage'

export default function Navbar() {

  const [onPressed, setOnPressed] = useState(false);

  const handleClick = () => {
    setOnPressed(true)
  }

  return (
    <>
      {
        onPressed ? (
          <div className="fixed">
            <div className="shadow-lg bg-orange-200">
              <SearchPage />
            </div>
          </div>
        ) : null
      }
      <div className='py-10 flex justify-between items-center'>
        <img src="logo.png" alt="Logo" className='h-full' />
        <div className='rounded-2xl shadow-md py-3 flex divide-x xl:mr-6'>
          <button className='px-3 text-xs self-center font-normal' onClick={handleClick}>Helsinki, Finland</button>
          <button className='px-3 text-xs opacity-30 font-medium'>Add guests</button>
          <span className="material-icons text-orange-500 px-3">
            <button className='font-normal'>
              search
            </button>
          </span>
        </div>
      </div>

    </>
  )
}
