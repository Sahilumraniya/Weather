import React, { useState } from 'react'
import './weather.css'

export const Weather = (props) => {

    const [temp, setTemp] = useState('');
    const [tempUnit, settempUnit] = useState('F')

    const fToc = () => {
        let f = props.data.current_observation.condition.temperature;
        let c = (f - 32) * (5 / 9);
        setTemp(c.toString().substring(0, 2))
        settempUnit('C')
    }
    const cTof = () => {
        let f = props.data.current_observation.condition.temperature;
        setTemp(f)
        settempUnit('F')
    }

    return (
        <>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{props.data.forecasts[0].day}</h2><span className="date-day">{props.data.location.timezone_id}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{props.data.location.city}, {props.data.location.country}</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">{temp === '' ? props.data.current_observation.condition.temperature : temp}&deg; <a className={tempUnit==='C'?`change-temp make`:`change-temp`} onClick={fToc}>C</a><strong>|</strong><a className={tempUnit==='F'?`change-temp make`:`change-temp`} onClick={cTof} >F</a></h1>
                        <h3 className="weather-desc">{props.data.forecasts[0].text}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">VISIBILITY</span><span className="value">{props.data.current_observation.atmosphere.visibility}</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{props.data.current_observation.atmosphere.humidity} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">{props.data.current_observation.wind.speed} km/h</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            {props.data.forecasts.map((d, index) => {
                                if (index < 7){
                                    return (
                                        <li><span className="day-name">{d.day}</span><span className="day-temp">{d.text}</span></li>
                                    )
                                }else{
                                    return null
                                }
                            })}
                            <div className="clear"></div>
                        </ul>   
                    </div>
                </div>
            </div>
        </>
    )
}

// {`${wether_icon[d.text]}`}

export default Weather;
