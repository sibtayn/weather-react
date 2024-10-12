// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import {useState} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./index.css"
export default function Searchbox({updateinfo}){
  let [city,setCity] = useState("");
  let [error,seterror] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather"
  let API_KEY = "fc8ec399b1604632f71109c5f81bf2d8"

  let getweatherinfo = async()=>{
    try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonresponse = await response.json();
    // console.log(jsonresponse);

    let result = {
      city: city,
      temp : jsonresponse.main.temp,
      tempmin : jsonresponse.main.temp_min,
      tempmax : jsonresponse.main.temp_max,
      humidity : jsonresponse.main.humidity,
      feelslike : jsonresponse.main.feels_like,
      weather : jsonresponse.weather[0].description,

    };
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  };


  let handlechange = (event)=>{
    setCity(event.target.value)
  }
  let handlesubmit = async (event)=>{
    try{
    event.preventDefault();
    seterror(false);
    console.log(city);
    setCity("");
    let newinfo = await getweatherinfo();
    updateinfo(newinfo);
    }catch(err){
      seterror(true);
      
    }
     
  };
  return(
    <div className="style">
      {/* <h3>Search for the Weather </h3> */}
      <form onSubmit={handlesubmit}>
      <TextField id="outlined-basic" label="city name" variant="outlined"  required value={city} onChange={handlechange}/>
      <br></br>
      <br></br>
      <Button type="submit" variant="contained">Search</Button>
      <br></br>
      <br></br>
      {error && <p style={{color:"red"}}>no such place exists</p>}
      </form>
    </div>
  )
}




