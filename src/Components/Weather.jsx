import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Weather() {

    const [weather, setWeather] = useState()
    const [myLocation, setMyLocation] = useState()

    const getLocation = async ()=>{
        let location = await axios.get('https://freegeoip.app/json/')
        setMyLocation(location)
    }

const getData = async ()=>{
    let Weather = await axios.get(`http://api.weatherstack.com/current?access_key=c8ef040a8c0ce9cd57caf1bda290a5e0&query=Cairo`)

    if(Weather.status == 200){
        setWeather(Weather.data)
    }
}


useEffect(() => {
    getLocation()
    getData()
}, [])


  return weather ? (
    <div id='weathers'>
        <h2>Weather</h2>
        <p>{weather.location.country}</p>
        <p>{weather.current.temperature}</p>
        <img src={weather.current.weather_icons[0]} />
        <p>{weather.current.weather_descriptions[0]}</p>
        <p>{weather.current.wind_degree}</p>

    </div>
  ) : null
}
