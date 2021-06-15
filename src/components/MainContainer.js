import React from 'react';
import CardsWeather from './weatherCards/CardsWeather';
import JokeContainer from './JokeContainer';

function MainContainer() {
  return (
    <div className='main-container-picture'>
      <div className="container">
        <JokeContainer />
      </div>
      <CardsWeather />
    </div>
  );
}
export default MainContainer;
