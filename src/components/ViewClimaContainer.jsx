import { ClimaCardData } from "./ClimaCardData"


export const ViewClimaContainer = ({ data }) => {


    return (
        <div className="h-100">
            <div className="carousel-inner  h-50">
                <div className="carousel-item active h-100">
                    <div className=" w-100 d-flex justify-content-around h-100 align-items-center text-center ">
                        <ClimaCardData title={data.main.temp_max + 'º'} text={'Hight'} />
                        <ClimaCardData title={data.wind.speed} text={'Wind'} />
                        <ClimaCardData title={data.main.humidity} text={'Humidity'} />
                    </div>
                </div>
            </div>
            <div className="carousel-inner  h-50">
                <div className="carousel-item active h-100">
                    <div className=" w-100 d-flex justify-content-around h-100 align-items-center text-center ">
                        <ClimaCardData title={data.main.temp_min + 'º'} text={'Low'} />
                        <ClimaCardData title={data.main.feels_like} text={'feels like'} />
                        <ClimaCardData title={data.weather[0].main} text={'Clima'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
