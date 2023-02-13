import {useEffect, useContext} from 'react'
import weatherContext from "../context/weatherContext"
 
function Days() {
    const {weather} = useContext(weatherContext);
    useEffect(() => {

    },[weather])
  return (
    <div>
    {weather.length == 7 ? <div className='other-days'>
        {weather.slice(1).map((element,index) => (<Day key = {index} day = {element.day} degree = {element.degree} desc = {element.description}/>))}
    </div> : undefined}
    </div>    
  )
}

function Day({day,degree,desc}){
    return(
        <div className='days'>
            <div className='general-info'>
                <span>{day}</span>
                <span>{degree} °C</span>
            </div>
            <span className='general-desc'>{desc}</span>
        </div>
    )
}

export default Days