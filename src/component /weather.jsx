import WeatherList from "./weatherList";
import "./weather.css";

const Weather = (props) => {
  return(
  <>
     {props.weatherForecasts.map((Weather) => 
     <WeatherList 
        day={Weather.day}
        img={Weather.img}
        imgAlt={Weather.imgAlt}
        conditions={Weather.conditions}
        time={Weather.time}
      />
  )
  }
   </>
  )
}

export default Weather;