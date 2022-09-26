import React, { useState } from 'react'
import { AiFillCloud } from 'react-icons/ai';
import {  BiWind } from 'react-icons/bi';
import {  TbTemperature } from 'react-icons/tb';
import {  GiHeavyRain } from 'react-icons/gi';

const WeatherCard = ({weather, temperature}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)


  const changeTemperature = () => setIsCelsius(!isCelsius)
  

    console.log(weather)

  return (
    <article className='card'> 
      <h1 className='card-title'>Weather App</h1> 
      <h2 className='card-subtitle'> {`${weather?.name}, ${weather?.sys.country}`} </h2>
      <section className='card_first-section'>     
        <img className='card_icon'
           src={weather ? `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` 
           : ""
           } 
           alt="" 
         />
      </section>
      <section className='card_second-section'>
        <h3 className='second_title'>"{weather?.weather[0].description}"</h3>
          <ul className='second_list'>       
           <li className='second_item'>
             <span className='second_span'> <BiWind/> Wind speed: </span>{weather?.wind.speed} m/s</li>
           <li className='second_item'>
             <span className='second_span'> <AiFillCloud/> Clouds: </span>{weather?.clouds.all}%</li>
           <li className='second_item'>
             <span className='second_span'> <TbTemperature/> Pressure: </span>{weather?.main.pressure} mb</li>
           <li className='second_item'>
             <span className='second_span'> <GiHeavyRain/> Humidity: </span>{weather?.main.humidity}%</li>
          
          </ul>
      </section> 
      <h2 className='card_temperature'>
        {isCelsius 
          ? `${temperature?.celsius} °C` 
          : `${temperature?.farenheit} °F`}
      </h2>
      <button className='card_btn' onClick={changeTemperature}>
        {isCelsius ? "change to °F" : "change to °C " }
      </button>
         
    </article>
   
  )
}

export default WeatherCard