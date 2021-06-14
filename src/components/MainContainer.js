import React from 'react';
import CardsWeather from './weatherCards/CardsWeather';
import JokeContainer from './JokeContainer';

function MainContainer() {
  return (
    <div>
      <div className="container">
        <JokeContainer />
      </div>
      <CardsWeather />
    </div>
  );
}
export default MainContainer;
