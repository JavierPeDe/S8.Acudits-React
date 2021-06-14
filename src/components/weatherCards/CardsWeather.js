import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import CardWeather from './CardWeather';
import axios from 'axios';
import '../../App.css';

export default function CardsWeather() {
  const [cardWeatherCity, setCardWeatherCity] = useState([]);
  const { ciudad, setCiudad } = useContext(DataContext);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCiudad((preCiudad) => [...preCiudad, evt.target.newCity.value]);
    evt.target.newCity.value = '';
  };

  useEffect(() => {
    setCardWeatherCity(() => []);
    async function callApiWeather() {
      console.log('ciudades a buscar ' + ciudad);
      ciudad.map(async (city) => {
        let APIkey = 'c2a837960ca2ff0c9275e80b7751ee58';
        let urlTiempo = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
        if (ciudad.length !== 0) {
          const apiTiempoData = await axios.get(urlTiempo);
          setCardWeatherCity((prevCardWeatherCity) => [
            ...prevCardWeatherCity,
            <CardWeather key={city} borrar={city} info={apiTiempoData} />,
          ]);
        }
      });
    }
    callApiWeather();
  }, [ciudad, setCiudad]);

  return (
    <div className="container ">
      <h2 className="titul-Weather"> Vols saber quin temps farà avui?</h2>
      <form className="container-form" onSubmit={handleSubmit}>
        <input
          placeholder="Busca una nova ciutat..."
          type="text"
          name="newCity"
        />
        <button type="submit" className="btn btn-primary m-1">
          Buscar
        </button>
      </form>
      <div className="column">{cardWeatherCity}</div>
    </div>
  );
}
