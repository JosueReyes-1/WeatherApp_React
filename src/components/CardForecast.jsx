

export const CardForecast = ({ temp_max, temp_min, dia, icon }) => {
    return (
        <>
            <div className="col mt-3">
                
                <div className="mx-2 px-4 py-2 card m-auto bg-light rounded shadow bg-opacity-25 d-flex flex-column justify-content-center text-center">
                    <p className="text-light h1 text-center">{dia.slice(11,-3)}</p>
                    
                    <img className="img-fluid m-auto h-25" src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
                    <p className="text-light h5">{Math.round(temp_max)} ºC</p>
                </div>
            </div>
        </>
    )
}
