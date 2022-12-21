import {useState, useEffect} from 'react';

export const useLocalStorage = () => {

	const [weatherHistory, setWeatherHistory] = useState(
		JSON.parse(localStorage.getItem('weatherHistory')) || []
	)
	
	useEffect(() => {
		localStorage.setItem('weatherHistory', JSON.stringify(weatherHistory));
	}, [weatherHistory]);

	return [weatherHistory, setWeatherHistory];
}