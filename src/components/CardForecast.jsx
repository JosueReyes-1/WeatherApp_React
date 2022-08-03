

export const CardForecast = ({temp_max,temp_min,dia,icon}) => {
  return (
    <>
        <div className="bg-light rounded shadow bg-opacity-25 w-100 mx-4 d-flex flex-column justify-content-center text-center">
          <p>{dia}</p>
          <p className="text-light ">{temp_max}</p>
          <img className="img-fluid m-auto h-25" src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/>
          <p>{temp_min}</p>
        </div>
    </>
  )
}
