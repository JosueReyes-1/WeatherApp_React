
import { useEffect, useState } from "react";
import { getClimaAhora } from "../helpers/getClimaAhora";
import { ViewClimaContainer } from "./ViewClimaContainer";
import { ViewForecast } from "./ViewForecast";




export const ViewClima = ({ ciudad }) => {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const newInfo = await getClimaAhora(ciudad);
        setInfo(newInfo)
    }

    useEffect(() => {
        getInfo();
    }, [])




    return (
        <>
        <div className="h-50 mx-2 mt-4 text-center">
            {(typeof info.main != "undefined") ? (
                <>
                    <h1>{info.name},{info.sys.country}</h1>
                    <p>Miercoles 10 de agosto</p>
                    <div className="d-flex h-75 flex-column">
                        <div className="w-100  d-flex  justify-content-center text-center">
                            <img className="img-fluid my-auto me-4 h-25" src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt=""/>
                            <div className="d-flex flex-column justify-content-center">
                                <h1 className="text-light display-1">{Math.round(info.main.temp)} ºC</h1>
                                <p className="text-light h3">{info.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="w-100 bg-light rounded shadow bg-opacity-25 container-fluid">
                            <ViewClimaContainer data={info} />
                        </div>
                    </div>
                </>
            ) : ('')}
        </div>
        <ViewForecast key={ciudad} ciudad={ciudad}/>
        </>
    )
}
