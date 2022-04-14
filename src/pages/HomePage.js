import Card from "../components/Card";
import { useRoom } from "../context/roomContext";

export default function HomePage() {

  const { location, isSearch, filterStays } = useRoom();

  return (
    <div className='px-3 md:px-16'>
      <div className="flex justify-between">
        <span className="sm:text-sm md:text-2xl font-bold">Stays in Finland</span>
        <span className="xl:mr-6 text-sm self-center">{isSearch ? filterStays.length : location.length} stays</span>
      </div>
      <div className="flex flex-col items-center md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 gap-2">
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
        <span className="text-sm text-gray-600">created by <a className="underline font-bold" href="https://devchallenges.io/portfolio/edwin141999">edwin141999</a> - devChallenges.io</span>
      </div>
    </div>
  )
}
