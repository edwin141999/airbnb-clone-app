import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function HomePage() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch('stays.json')
      .then(res => res.json())
      .then(data => {
        setLocation(data);
        console.log(data);
      })
  }, []);


  return (
    <div className='px-16 '>
      <div className="flex justify-between">
        <span className="text-2xl font-bold">Stays in Finland</span>
        <span className="xl:mr-6 text-sm self-center">12+ stays</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {
          location.map((data) => {
            return <div>
              <Card key={data.photo} children={data} />
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
