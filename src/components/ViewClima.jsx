
import { useEffect, useState } from "react";
import { getClimaAhora } from "../helpers/getClimaAhora";
import { ViewClimaData } from "./ViewClimaData";



export const ViewClima = ({ ciudad }) => {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const newInfo = await getClimaAhora(ciudad);
        setInfo(newInfo)
    }

    console.log(info)
    useEffect(() => {
        getInfo();
    }, [])




    return (
        <div className="h-50  mt-5 mx-5">
            {(typeof info.main != "undefined") ? (
                <>
                    <h1>{info.name},{info.sys.country}</h1>
                    <p>Miercoles 10 de agosto</p>
                    <div className="d-flex h-75">
                        <div className="w-50  d-flex flex-column justify-content-center text-center">
                            <h1 className="text-light display-1">{Math.round(info.main.temp)} ºC</h1>
                            <p className="text-light h3">{info.weather[0].description}</p>
                        </div>
                        <div className="w-50 bg-light rounded shadow opacity-25">
                            <ViewClimaData title={info.sys.country} />
                        </div>
                    </div>
                </>
            ) : ('')}
        </div>
    )
}
