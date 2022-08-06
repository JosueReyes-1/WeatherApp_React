import { useEffect, useState } from "react"
import { AddCountry } from "./components/AddCountry"
import { ViewClima } from "./components/ViewClima"

import './weatherapp.scss'


export const WeatherApp = () => {

  const [ciudad, setCiudad] = useState('')
  
  const onAddCiudad = (newCiudad) => {
    if (ciudad.includes(newCiudad)) return;
    setCiudad(newCiudad);
  }
  
  return (
    <div className="fondo">
      <AddCountry onNewCiudad={(event) => onAddCiudad(event)} />
      <ViewClima key={ciudad} ciudad={ciudad} />

    </div>

  )
}
