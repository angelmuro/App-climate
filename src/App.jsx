import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {
 
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState() 
  const [temperature, setTemperature]= useState()
  

  useEffect(() => {

    const success = pos => {
      const obj ={
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
       setCoords(obj); 
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  

//---------------Peticion del clima------------

  useEffect(() => {
    if(coords){
      
      const APIKEY = "a614ef80680b6e93d6a9acb1df5be455"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => { 
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
          setTemperature({celsius,farenheit})
           setWeather(res.data)
        })
        .catch(err => console.log(err))
   }
  }, [coords])


  return (
    <div className="App">
      {
       weather ? 
      <WeatherCard weather={weather} temperature={temperature}/>
      :
       <Loading />
      }
    </div>
  )
}

export default App
