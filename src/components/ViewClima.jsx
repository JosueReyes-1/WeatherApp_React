
import { useEffect, useState } from "react";
import { getClimaAhora } from "../helpers/getClimaAhora";
import { ViewClimaContainer } from "./ViewClimaContainer";
import { ViewForecast } from "./ViewForecast";

import { motion } from "framer-motion"


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
        <div className="mx-2 mt-5 text-center ">
            {(typeof info.main != "undefined") ? (
                <>
                    <motion.h1 initial={{scale:0}} animate={{scale:1}} transition={{ease:'easeInOut',duration:0.3}} className="text-light display-1">{info.name},{info.sys.country}</motion.h1>
                    <motion.p initial={{scale:0}} animate={{scale:1}} transition={{ease:'easeInOut',duration:0.3}} className="text-light h3">Miercoles 10 de agosto</motion.p>
                    <div className="d-flex h-75 flex-column mt-5 container-fluid">
                        <div className="w-100  d-flex  justify-content-center text-center">
                            <motion.img animate={{x:[0,10,0,-10,0]}} transition={{duration:2,ease: "linear",repeat: Infinity,delay:.5}} className="img-fluid my-auto me-4 h-25" src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt=""/>
                            <div className="d-flex flex-column justify-content-center">
                                <motion.h1 initial={{scale:0}} animate={{scale:1}} transition={{ease:'easeInOut',duration:0.3}}  className="text-light display-1">{Math.round(info.main.temp)} ºC</motion.h1>
                                <motion.p initial={{scale:0}} animate={{scale:1}} transition={{ease:'easeInOut',duration:0.3}} className="text-light h3">{info.weather[0].description}</motion.p>
                            </div>
                        </div>
                        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{ease:'easeInOut',duration:0.3}} className=" mt-5 bg-light rounded shadow bg-opacity-25 container-fluid">
                            <ViewClimaContainer data={info} />
                        </motion.div>
                    </div>
                </>
            ) : ('')}
        </div>
        <ViewForecast key={ciudad} ciudad={ciudad}/>
        </>
    )
}
