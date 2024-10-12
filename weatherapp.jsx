import Searchbox from "./searchbox.jsx";
import Infobox from "./infobox.jsx";
import { useState } from "react";

export default function Weatherapp(){

    const [weatherinfo, setweatherinfo] = useState({
            city: "Delhi",
            feelslike : 24.84,
            temp: 25.05,
            tempmin: 25.05,
            tempmax: 25.05,
            humidity: 47,
            weather: "haze",
    })

    let updateinfo = (newinfo)=>{
        setweatherinfo(newinfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>weather app by sibtain raza </h2>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    )
}