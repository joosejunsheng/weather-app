import { useState } from "react";
import Button from "./shared/Button";
import TextField from "./shared/TextField";

function Search(props){

    const { onSubmitSearch, onClearForm } = props;
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const changeCity = (city) => {
        setCity(city);
        console.log(city);
    }
    
    const changeCountry = (country) => {
        setCountry(country);
        console.log(country);
    }

    const submitSearch = () => {
        onSubmitSearch({
            city,
            country
        });
    }

    const clearFields = () => {
        setCity("");
        setCountry("");
        onClearForm({
            city: "",
            country: ""
        });
    }

    return (

        <>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 pb-8">
                <div className="mt-2">
                    <TextField label="City" changeInput={changeCity} value={city}/>
                </div>
                <div className="mt-2 pb-5">
                    <TextField label="Country" changeInput={changeCountry} value={country}/>
                </div>
                <div className="">
                    <Button label="Search" submitButton={submitSearch}/>
                    <Button label="Clear" submitButton={clearFields}/>
                </div>
            </div>
        </>

    )

}

export default Search;