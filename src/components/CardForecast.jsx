

export const CardForecast = ({ temp_max, temp_min, dia, icon }) => {
    return (
        <>
            <div className="col">
                <div className="mx-2 card m-auto bg-light rounded shadow bg-opacity-25 d-flex flex-column justify-content-center text-center">
                    <p>{dia}</p>
                    <p className="text-light ">{temp_max}</p>
                    <img className="img-fluid m-auto h-25" src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
                    <p>{temp_min}</p>
                </div>
            </div>
        </>
    )
}
