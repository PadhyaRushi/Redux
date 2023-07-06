import React, { useState } from 'react';

function Weather(props) {
    const [location, setlocation] = useState("");
    // console.log(location);
    const [data, setdata] = useState({})
    // console.log(data);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dab2d837ad4d55600f778549b360df30&units=metric`

    const search = async (event) => {
        if (event.key === "Enter") {
            const response = await fetch(url)
            const jsondata = await response.json();
            //    console.log(jsondata);
            setdata(jsondata)
            setlocation("")
        }
     
    }



    return (
        <>
            <div className="body">
                <div className="container">
                    <div className="weather-box">
                        <div className="layer">
                            <div className="search-bar">
                                <input type="text"
                                    placeholder='Enter Location'
                                    value={location}
                                    onChange={(e) => setlocation(e.target.value)}
                                    onKeyPress={search}
                                />
                            </div>
                            <div className="temp-info">
                                <h4 className='city'>{data.name}</h4>
                                {
                                    data.main ?
                                        <h1 className='temp'>
                                            {data.main.temp.toFixed()}&deg;C
                                        </h1> : null
                                }
                                {
                                    data.weather ?
                                        <h1 className='cloud'>
                                            {data.weather[0].description}
                                        </h1> : null
                                }

                            </div>

                            {
                                data.name != undefined &&
                                <div className="temp-icon">
                                <div className="feels a1">

                                    {
                                        data.main ?
                                            <h1 className='f1'>
                                                {data.main.feels_like.toFixed()}&deg;C
                                            </h1> : null
                                    }
                                    <p className='f2'>Feels Like</p>
                                </div>
                                <div className="humidity a1">
                                    {
                                        data.main ?
                                            <h1 className='f1'>
                                                {data.main.humidity.toFixed()}&deg;C
                                            </h1> : null
                                    }
                                    <p className='f2'>Humidity</p>
                                </div>
                                <div className="winds a1">
                                    {
                                        data.wind ?
                                            <h1 className='f1'>
                                                {data.wind.speed.toFixed()} MPH
                                            </h1> : null
                                    }
                                    <p className='f2'>Winds</p>
                                </div>
                            </div>
                    }
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;