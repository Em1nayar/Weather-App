import './App.css';
import Nav from "./Components/Nav"
import Search from './Components/Search';
import Weather from "./Components/Weather";
import WeatherContext from "./context/weatherContext"
import {useState} from "react"

function App(){
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("istanbul");
  const data = {
    weather ,
    setWeather,
    search,
    setSearch
  }
  return(
    <WeatherContext.Provider value={data}>
        <div className='app'>
          <Nav/>
          <Search/>
          <div id = "city">
            <h2>{search.toUpperCase()}</h2>
          </div>
          <Weather/>
      </div>
    </WeatherContext.Provider>
  )
}


export default App;
