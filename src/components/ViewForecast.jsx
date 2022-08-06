import { useEffect, useState } from "react";
import { getForecast } from "../helpers/getForecast";
import { CardForecast,  } from "./CardForecast";

export const ViewForecast = ({ ciudad }) => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    const newData = await getForecast(ciudad);
    setData(newData)
  }


  useEffect(() => {
    getInfo();
  }, [])

  return (
    <div className="row row-cols-1 row-cols-2 mt-5 g-1 container-fluid " >
      {data.map((forecast) => (
        <CardForecast key={forecast.id} {...forecast}/>
      ))}
    </div>
  )
}
