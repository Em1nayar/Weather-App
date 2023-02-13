import {useEffect , useContext} from 'react'
import WeatherContext from '../context/weatherContext'
import Days from "./Days"
import Today from "./Today"

function Weather() {
    const {search,weather,setWeather} = useContext(WeatherContext);
    useEffect(() => {
        // fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${search}`,{
        //     method: 'GET',
        //     headers: {
        //         "content-type": "application/json",
        //         "authorization" : "apikey 2QpYkTcDy1jBGM8Ohm743o:1ddiCRnf2BQIm6HZZENzT8"
        //     }
        // }).then(res => res.json()).then(data => setWeather(data.result));
    },[search])
    console.log(weather);
  return (
    <div className='center'>
        <div className='weather-group'>
            <Today/>
            <Days/>
        </div>
    </div>
  )
}

export default Weather