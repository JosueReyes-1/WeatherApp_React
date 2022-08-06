export const getClimaAhora=async(ciudad)=>{

    const urlCiudad=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=74a84bd7f45ef94da50d9ec454b76e37&units=metric&lang=es`
    const resp=await fetch(urlCiudad);
    const data=await resp.json();

    
    return data;

}
