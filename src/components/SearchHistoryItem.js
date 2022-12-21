
function SearchHistoryItem(props){

    const { weather, index, searchWeatherAgain, deleteWeatherHistory } = props;
    
    return (
        <>
            {index == 0 &&
                <div className="px-5 border-t" style={{ width: '100%' }}></div>
            }
            <div className="flex justify-between px-5 border-b p-5 items-center" style={{ width: '100%' }}>
                <div className="history-location" style={{ float: 'left' }}>
                    <span className="pr-2">{index + 1}. </span>
                    {weather.city != "" &&
                        <>
                            { weather.city }
                        </>
                    }
                    {weather.country != "" &&
                        <>
                            , { weather.country }
                        </>
                    }
                </div>
                <div className="history-item-alignment">
                    <span className="pr-4">{ weather.dateTime }</span>
                    <span style={{ cursor: 'pointer' }} className="material-symbols-outlined pr-3" onClick={() => searchWeatherAgain(index)}>
                    search
                    </span>
                    <span style={{ cursor: 'pointer' }} className="material-symbols-outlined" onClick={() => deleteWeatherHistory(index)}>
                    delete
                    </span>
                </div>
            </div>
        </>
    )

}

export default SearchHistoryItem;