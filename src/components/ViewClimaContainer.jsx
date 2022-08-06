import { ClimaCardData } from "./ClimaCardData"


export const ViewClimaContainer = ({ data }) => {


    return (
        <div className="h-100">
            <div className="carousel-inner  h-50 px-3 m-auto">
                <div className="carousel-item active h-100 mt-3">
                    <div className=" w-100 d-flex justify-content-around h-100 align-items-center text-center">
                        <ClimaCardData title={ Math.round(data.main.temp_max) + ' ºC'} text={'Hight'} />
                        <ClimaCardData title={data.wind.speed} text={'Wind'} />
                        <ClimaCardData title={data.main.humidity + '%'} text={'Humidity'} />
                    </div>
                </div>
            </div>
            <div className="carousel-inner pt-3 h-50 px-3 m-auto">
                <div className="carousel-item active h-100">
                    <div className=" w-100 d-flex justify-content-around h-100 align-items-center  ">
                        <ClimaCardData title={Math.round(data.main.temp_min) + ' ºC'} text={'Low'} />
                        <ClimaCardData title={Math.round(data.main.feels_like)+ ' ºC'} text={'feels like'} />
                        <ClimaCardData title={data.weather[0].main} text={'Clima'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
