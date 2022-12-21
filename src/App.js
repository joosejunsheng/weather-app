import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import NotFound from './components/NotFound';
import { useCallback, useEffect, useState } from 'react';
import { getCurrentWeather } from './services/api/weatherApi';
import WeatherToday from './components/WeatherToday';
import { useLocalStorage } from './hooks/useLocalStorage';
import SearchHistory from './components/SearchHistory';
import { MagnifyingGlass } from  'react-loader-spinner';
import dayjs from "dayjs";

function App() {

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [weather, setWeather] = useState("");
  
  // Custom hook for local storage
	const [weatherHistory, setWeatherHistory] = useLocalStorage();

  const onSubmitSearch = (searchObj) => {

    let city = searchObj.city;
    let country = searchObj.country;

    setCity(city);
    setCountry(country);
    
    getWeather(city, country);
  }

  const onClearForm = () => {
    setCity("");
    setCountry("");
  }

  useEffect(() => {
    getWeather();
    // return () => {

    // }
  }, []);
  
  useEffect(() => {
    
    if(!weather || (city == "" && country == "")) {
      return;
    }
    let newHistory = [{
      city: city,
      country: country,
      dateTime: dayjs().format('hh:mm:ss A')
    }, ...weatherHistory];

    setWeatherHistory(newHistory);
    
  }, [weather]);

  const getWeather = async (city, country) => {
    setIsLoading(true);
    let response = await getCurrentWeather(city, country);
    setIsLoading(false);
    
    if(response.cod == 200){
      setWeather(response);
    }else{
      setWeather(null);
    }
  }

  const searchWeatherFromHistory = useCallback((index) => {
    const prevSearchedWeather = [...weatherHistory].find((w, i) => i == index);

    setCity(prevSearchedWeather.city);
    setCountry(prevSearchedWeather.country);

    getWeather(prevSearchedWeather.city, prevSearchedWeather.country);
  }, [weatherHistory])
  
  const deleteWeatherFromHistory = useCallback((index) => {

    const removedHistoryItemArray = [...weatherHistory].filter((w, i) => i != index);

    setWeatherHistory(removedHistoryItemArray);
  }, [weatherHistory])

  return (
    <div className="App">
      <div className="grid md:grid-cols-5 sm:grid-cols-1">
        <div className="col-start-2 col-span-3">
          <h3>Today's Weather</h3>
        </div>
        <div className="col-start-2 col-span-3">
          <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="col-start-2 col-span-3">
          <header className="">
            <Search onSubmitSearch={onSubmitSearch} onClearForm={onClearForm} />
            
            {isLoading &&
              <div className='loading-overlay'>
                <MagnifyingGlass
                  visible={true}
                  height="80"
                  width="80"
                  margin="auto"
                  ariaLabel="MagnifyingGlass-loading"
                  wrapperStyle={{ position: 'absolute', margin: 'auto', top: '0', bottom: '0', left: '0', right: '0', zIndex: '9999999' }}
                  wrapperClass="MagnifyingGlass-wrapper"
                  glassColor = '#c0efff'
                  color = '#e15b64'
                  />
              </div>
            }
          </header>
          {weather
            ?
            <WeatherToday weather={weather}/>
            :
            <NotFound />
          }
          <SearchHistory weatherHistory={weatherHistory} searchWeatherFromHistory={searchWeatherFromHistory} deleteWeatherFromHistory={deleteWeatherFromHistory}/>
        </div>
    </div>
  </div>
  );
}

export default App;
