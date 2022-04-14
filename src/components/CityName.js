import { useRoom } from '../context/roomContext'

export default function CityName() {
  const { citys, setSelectCity, setIsClicked } = useRoom()

  return (
    <div className='pt-9 pb-12'>
      {
        citys().map((data) => {
          return <div className='px-5 pb-7 flex self-center cursor-default' key={data}>
            <span className="material-icons mr-1 text-gray-600">
              room
            </span>
            <span className='text-sm cursor-pointer' onClick={() => { setSelectCity(data); setIsClicked(true) }}>{data}</span>
          </div>
        })
      }
    </div>
  )
}
