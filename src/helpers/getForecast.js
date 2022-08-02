

export const getForecast = async (ciudad) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=74a84bd7f45ef94da50d9ec454b76e37&cnt=7&units=metric&lang=es`
    const resp = await fetch(url);
    const { list } = await resp.json();


    const datos = list.map(weather => ({
        temp_max: weather.main.temp_max,
        temp_min: weather.main.temp_min,
        dia:weather.dt_txt

    }))

    console.log(datos);

    return datos;
}
