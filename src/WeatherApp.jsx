import {  useState } from "react"
import { AddCountry } from "./components/AddCountry"
import { ViewClima } from "./components/ViewClima"
import { ViewForecast } from "./components/ViewForecast"
import './weatherapp.scss'

export const WeatherApp = () => {

  const [ciudad, setCiudad] = useState(['tepic'])

  const onAddCiudad=(newCiudad)=>{
    if(ciudad.includes(newCiudad)) return;
    setCiudad(newCiudad,...ciudad);
  }

  return (
    <div className="fondo vh-100">
      <AddCountry onNewCiudad={(event) => onAddCiudad(event)} />
      <ViewClima key={ciudad} ciudad={ciudad}/>
      <ViewForecast key={ciudad} ciudad={ciudad}/>
    </div>

  )
}
