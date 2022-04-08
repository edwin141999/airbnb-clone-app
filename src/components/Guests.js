import React from 'react'

export default function Guests() {
  return (
    <div className='pt-10 pb-14 px-5'>
      <div className='pb-12'>
        <span className='text-xs flex flex-col'>
          <p className='text-sm'>Adults</p>
          <span className='text-gray-500'>Ages 13 or above</span>
        </span>
        <div className='pt-3'>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md'>-</button>
          <span className='font-semibold px-4'>0</span>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md'>+</button>
        </div>
      </div>
      <div>
        <span className='flex flex-col text-xs'>
          <p className='text-sm'>Children</p>
          <span className='text-gray-500'>Ages 2 - 12</span>
        </span>
        <div className='pt-3'>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md'>-</button>
          <span className='font-semibold px-4'>0</span>
          <button className='border border-gray-500 text-gray-500 px-2 rounded-md'>+</button>
        </div>
      </div>
    </div>
  )
}