import {useEffect,useContext} from 'react'
import weatherContext from "../context/weatherContext"

function Today() {
    const {weather} = useContext(weatherContext)
    useEffect(() => {
    },[weather])
  return (
    <div className='today-info'>
        <div>
            <p id = "today">{weather.length == 7 ? weather[0].day : undefined}</p>
            <p id = "degree">{weather.length == 7 ? weather[0].degree : undefined} <span id='degree-C'>°C</span></p>
            <p><span className='min-max-info'>min</span> <span className='info'>{weather.length == 7 ? weather[0].min : undefined}</span> <span>c</span></p>
            <p><span className='min-max-info'>max</span> <span className='info'>{weather.length == 7 ? weather[0].max : undefined}</span> <span>c</span></p>
            <p id="status">{weather.length == 7 ? weather[0].description : undefined}</p>
        </div>
    </div>
  )
}

export default Today