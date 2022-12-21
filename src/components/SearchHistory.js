import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import NoRecord from "./NoRecord";
import SearchHistoryItem from "./SearchHistoryItem"

function SearchHistory(props){

    const { weatherHistory, searchWeatherFromHistory, deleteWeatherFromHistory } = props;

    const searchWeatherAgain = (index) =>{
        searchWeatherFromHistory(index);
    }

    const deleteWeatherHistory = (index) => {
        deleteWeatherFromHistory(index);
    }

    return (

        <>
            <div className="grid md:grid-cols-1 sm:grid-cols-1">
                <h3>Search History</h3>
                <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                
                {weatherHistory.length == 0
                    ?
                    <NoRecord />
                    :
                    <>
                        {weatherHistory.map((weather, i) => {
                            return <SearchHistoryItem index={i} key={i} weather={weather} deleteWeatherHistory={deleteWeatherHistory} searchWeatherAgain={searchWeatherAgain}/>
                        })}
                    </>
                }
            </div>
        </>

    )
}


export default SearchHistory;