import React, { useEffect, useState } from "react";
import axios from "axios";
import Context from "./Context";
import img11 from "../img/img11.jpg";
import Temp from "./Temp";

function Navbar() {
  const [city, setcity] = useState({});
  const [search, setsearch] = useState("");
  const [xyz, setxyz] = useState("");


  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.weatherapi.com/v1/forecast.json?key=759dd083130c481f8ab184810213108&q=${xyz}&days=1`,
    })
      .then((response) => {
        console.log(response.data);
        setcity(response.data);
      })
      .catch((error) => {
        setcity({});
        console.log(error);
      });
  }, [xyz]);
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg"
          // style={{border: "2px solid black"}}
          style={{ backgroundImage: `url(${img11})` }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Weather Web
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Your City"
                aria-label="Search"
                onChange={(event) => {
                  setsearch(event.target.value);
                }}

              />

              <button type="button" className="btn btn-primary" onClick={() =>{
                setxyz(search)
              }}>Search</button>

            </div>
          </div>
        </nav>
      </div>
      <div className = "container" 
      >
        {Object.keys(city).length === 0 ? (
          <div className="error">
            {Object.keys(xyz).length === 0 ? (
              <h1>Welcome to Weather Website</h1>
            ) : (
              <h1>City not found !</h1>
            )}
          </div>
        ) : (
          <div>
              <div className="head" style={{color: "black" }}>
                <h3>
                  City: {city.location.name} Country: {city.location.country}
                </h3>
                <h3>
                  Sunrise: {city.forecast.forecastday[0].astro.sunrise} Sunset:{" "}
                  {city.forecast.forecastday[0].astro.sunset}
                </h3>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src={city.forecast.forecastday[0].day.condition.icon}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Temprature {city.forecast.forecastday[0].day.avgtemp_c}
                      </h5>
                      <p>
                        Maximum Temprature{" "}
                        {city.forecast.forecastday[0].day.maxtemp_c} <br />
                        Minimum Temprature{" "}
                        {city.forecast.forecastday[0].day.mintemp_c}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <Temp
                    time={city.forecast.forecastday[0].hour[0].time}
                    temp={city.forecast.forecastday[0].hour[0].temp_c}
                    image={city.forecast.forecastday[0].hour[0].condition.icon}
                    condition={
                      city.forecast.forecastday[0].hour[0].condition.text
                    }
                  ></Temp>
                </div>
                <div className="col-md-3">
                  <Temp
                    time={city.forecast.forecastday[0].hour[12].time}
                    temp={city.forecast.forecastday[0].hour[12].temp_c}
                    image={city.forecast.forecastday[0].hour[12].condition.icon}
                    condition={
                      city.forecast.forecastday[0].hour[12].condition.text
                    }
                  ></Temp>
                </div>
                <div className="col-md-3">
                  <Temp
                    time={city.forecast.forecastday[0].hour[18].time}
                    temp={city.forecast.forecastday[0].hour[18].temp_c}
                    image={city.forecast.forecastday[0].hour[18].condition.icon}
                    condition={
                      city.forecast.forecastday[0].hour[18].condition.text
                    }
                  ></Temp>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Context
                    status={city.current.humidity}
                    condition="Humidity"
                    unit="%"
                  ></Context>
                </div>
                <div className="col-md-3">
                  <Context
                    status={city.current.wind_mph}
                    condition="Wind Stauts"
                    unit="mph"
                  ></Context>
                </div>
                <div className="col-md-3">
                  <Context
                    status={city.current.vis_miles}
                    condition="Visibility"
                    unit="miles"
                  ></Context>
                </div>
                <div className="col-md-3">
                  <Context
                    status={city.current.pressure_mb}
                    condition="Air Pressure"
                    unit="mb"
                  ></Context>
                </div>
              </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
