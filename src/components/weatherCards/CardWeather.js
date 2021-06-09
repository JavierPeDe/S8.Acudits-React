import { useContext } from 'react';
import '../../App.css';
import { DataContext } from '../../context/DataContext';

function CardWeather(props) {
  const kelvinToCelsius = (temp) => Math.ceil(temp - 273.15);

  let currentTime = new Date();
  let fecha = currentTime.toDateString();

  const { ciudad, setCiudad } = useContext(DataContext);
  var newArrayCity = [];
  const deleteCity = () => {
    setCiudad((preCiudad) => {
      newArrayCity = [...preCiudad];
      let index = preCiudad.indexOf(props.borrar);

      newArrayCity.splice(index, 1);
      return newArrayCity;
    });
  };

  return (
    <div className="card style-card ">
      <div className=" card-body">
        <div className="col-md-3">
          <img
            alt="tiempo"
            src={`http://openweathermap.org/img/wn/${props.info.data.weather[0].icon}@2x.png`}
          />
        </div>
        <div className="col-md-3 p-0 m-0">
          <h2 className="card-title  mt-3 m-0">{props.info.data.name}</h2>
          <p>{fecha}</p>
        </div>
        <div className="col-md-3 p-0 m-0">
          <h5>{`${kelvinToCelsius(props.info.data.main.temp)}ºC`}</h5>
          <p className="card-text text-secondary p-0 m-0">{`Min ${kelvinToCelsius(
            props.info.data.main.temp_min
          )}ºC | Max ${kelvinToCelsius(
            props.info.data.main.temp_max + 1
          )}ºC`}</p>
        </div>
      </div>
      <div className=" con-button">
        <button
          onClick={deleteCity}
          name={props.borrar}
          value={props.borrar}
          className="btn btn-danger"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default CardWeather;
