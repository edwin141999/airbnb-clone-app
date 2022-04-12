import Card from "../components/Card";
import { useRoom } from "../context/roomContext";

export default function HomePage() {

  const { location, setOnPressed, setOnPressedCity, setOnPressedGuests, isSearch, filterStays } = useRoom();

  const handleClick = () => {
    setOnPressed(false)
    setOnPressedCity(false)
    setOnPressedGuests(false)
  }

  return (
    <div className='px-16 ' onClick={handleClick}>
      <div className="flex justify-between">
        <span className="text-2xl font-bold">Stays in Finland</span>
        <span className="xl:mr-6 text-sm self-center">{isSearch ? filterStays.length : location.length} stays</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {
          isSearch ? (
            filterStays.map((data) => {
              return <div key={data.photo}>
                <Card children={data} />
              </div>
            })
          ) : location.map((data) => {
            return <div key={data.photo}>
              <Card children={data} />
            </div>
          })
        }
      </div>
      <div className="flex justify-center pt-16 pb-4">
        <span className="text-sm text-gray-600">created by <button className="underline">edwin141999</button> - devChallenges.io</span>
      </div>
    </div>
  )
}
