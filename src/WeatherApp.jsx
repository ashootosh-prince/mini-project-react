import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import TopBar from "./TopBar";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        feelsLike: 28.08,
        humidity: 34,
        city: "Delhi",
        temp:28.95,
        tempMax: 29.05,
        tempMin: 28.95,
        weather: "haze", 
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}> 
            <TopBar />         
            {/* <h2>Weather App</h2> */}
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}
           