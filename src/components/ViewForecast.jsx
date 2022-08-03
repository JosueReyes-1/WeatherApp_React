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
    <div className="d-flex justify-content-around h-25 mt-5">
      {data.map((forecast) => (
        <CardForecast key={forecast.id} {...forecast}/>
      ))}
    </div>
  )
}
