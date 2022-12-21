import dayjs from "dayjs";

function WeatherToday(props){

    const { weather } = props;
    console.log(dayjs().format('hh:mm:ss A'));
    
    return (
        <>
            <div className="grid md:grid-cols-9 sm:grid-cols-1 pb-8">
                <div className="grid md:col-start-3 md:col-span-5 sm:grid-cols-8 pb-8">
                    <div className="col-start-3 col-span-4">
                        <p>{weather.name}, {weather.sys.country}</p>
                        <p className="text-4xl font-bold pb-4">{weather.weather[0].main}</p>
                    </div>
                    
                    <div className="col-start-2 col-end-4 weather-today-label">Description: </div>
                    <div className="col-end-8 col-span-3">{weather.weather[0].description}</div>
                    
                    <div className="col-start-2 col-end-4 weather-today-label">Temperature: </div>
                    <div className="col-end-8 col-span-3">{weather.main.temp_min}°C ~ {weather.main.temp_max}°C</div>
                    
                    <div className="col-start-2 col-end-4 weather-today-label">Humidity: </div>
                    <div className="col-end-8 col-span-3">{weather.main.humidity}%</div>

                    <div className="col-start-2 col-end-4 weather-today-label">Time: </div>
                    <div className="col-end-8 col-span-3">{dayjs().format('YYYY-MM-DD hh:mm:ss A')}</div>
                </div>
            </div>
            {/* <div className="grid md:grid-cols-10 sm:grid-cols-2">
                <p>{weather.name}, {weather.sys.country}</p>
                <p className="text-4xl font-bold pb-4">{weather.weather[0].main}</p>
                <div className="grid grid-cols-8">
                    <div className="col-start-2 col-span-2 weather-today-label">Description: </div>
                    <div className="col-span-4">{weather.weather[0].description}</div>
                </div>
                <div className="grid grid-cols-8">
                    <span className="col-start-2 col-span-2 weather-today-label">Temperature:</span>
                    <span className="col-span-4">{weather.main.temp_min} ~ {weather.main.temp_max}</span>
                </div>
                <div className="grid grid-cols-8">
                    <span className="col-start-2 col-span-2 weather-today-label">Humidity: </span>
                    <span className="col-span-4">{weather.main.humidity}%</span>
                </div>
                <div className="grid grid-cols-8">
                    <span className="col-start-2 col-span-2 weather-today-label">Time: </span>
                    <span className="col-span-4">{dayjs().format('YYYY-MM-DD hh:mm:ss A')}</span>
                </div>
            </div> */}
        </>
    )
}

export default WeatherToday;