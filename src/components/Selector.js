import React, { useContext, useEffect, useState } from 'react';
import WelcomeComponent from './WelcomeComponent/WelcomeComponent';
import MainContainer from './MainContainer';
import { DataContext } from '../context/DataContext';
function Selector() {
  const [selected, setSelected] = useState();
  const { isLogin, setIsLogin } = useContext(DataContext);
  useEffect(() => {
    setSelected(() => (isLogin ? <WelcomeComponent /> : <MainContainer />));
  }, [isLogin, setIsLogin]);
  return <div>{selected}</div>;
}

export default Selector;
