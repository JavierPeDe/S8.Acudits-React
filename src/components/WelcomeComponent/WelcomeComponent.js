import React from 'react';
import './welcome-Style.css';
import { ButtonLink } from './ButtonLink';
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
  return (
    <div className="container-welcome">
      <h1 className="title-welcome">Benvingut</h1>
      <h2 className="currentDay">Vols passar un bon {days[currentDay]}?</h2>
      <ButtonLink />
    </div>
  );
}
