import React, { useState } from 'react'
import axios from 'axios';
import Weather from './Weather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css'
// import data from '../test.js'

export const Form = () => {

  // console.log(data)

  const [data, setData] = useState('')

  const [city, setCity] = useState('')
  const URL = 'https://yahoo-weather5.p.rapidapi.com/weather?location='

  const onhandle = async (e) => {
    // toast.success('All data was fetched', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
    e.preventDefault();
    console.log(city)
    let url = URL.concat(city);
    setCity('');
    console.log(url);
    let res = await toast.promise(axios.get(url, {
      headers: {
        'X-RapidAPI-Key': '1a8d67801amshd8afab662a4e2dfp135566jsn6be9a2e6600d',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    }),
      {
        pending: `${city} city's weather data is fetching now, Please Waiting`,
        success: 'Weather data was fetched successfully 👌',
        error: 'OOP!, Weather data was not fetch, some error 🤯,try again'
      }
    )
    setData(res.data);
  }

  return (
    <>
      <div className='form-box'>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <form onSubmit={onhandle}>
          <label htmlFor='city'>City : </label>
          <input value={city} type='text' name='city' id='city' onChange={(e) => { setCity(e.target.value) }} ></input>

          <input className='button-63' id="submit" type="submit" />
        </form>
      </div>
      {data === '' ? <div className='meassage'>Enter city name to get weather report</div> : <Weather data={data} />}
    </>
  )
}

export default Form;
