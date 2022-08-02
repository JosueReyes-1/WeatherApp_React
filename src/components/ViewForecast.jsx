import { useEffect, useState } from "react";
import { getForecast } from "../helpers/getForecast";

export const ViewForecast = ({ciudad}) => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    const newData = await getForecast(ciudad);
    setData(newData)
  }

  
  useEffect(() => {
    getInfo();
  }, [])

  return (
    <div>ViewForecast</div>
  )
}
