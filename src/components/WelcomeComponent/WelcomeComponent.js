import React, { useContext } from 'react';

import './welcome-Style.css';
import { DataContext } from '../../context/DataContext';

export default function WelcomeComponent() {
  const days = [
    'Diumenge',
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte',
  ];
  const currentDay = new Date().getDay();
  const { isLogin, setIsLogin } = useContext(DataContext);
  const loginButton = () => setIsLogin(false);
  console.log(isLogin);
  return (
    <div className="container-welcome">
      <h1 className="title-welcome">Benvingut</h1>
      <h2 className="currentDay">Vols passar un bon {days[currentDay]}?</h2>
      <div className="container-button">
        <span>
          <a onClick={loginButton}></a>
        </span>
      </div>
    </div>
  );
}
