import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function SearchPage() {
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
    <div className="px-14">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Stays in Finland</h2>
        <span>12+ stays</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {
          location.map((data) => {
            return <div className="place-self-stretch">
              <Card key={data.photo} children={data} />
            </div>
          })
        }
      </div>
    </div>

  )
}
