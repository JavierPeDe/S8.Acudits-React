import React, {createContext, useState} from 'react';

export const DataContext = createContext()

const InitialCities =['Barcelona', 'Madrid']
const InitialLogin=true;
export const DataProvider = ({ children }) =>{

    const [ciudad, setCiudad] =  useState(InitialCities)
    const [isLogin, setIsLogin] = useState(InitialLogin)
    return (
        <DataContext.Provider value={{
            ciudad, 
            setCiudad,
            isLogin,
            setIsLogin
            
        }}>
            {children}
        </DataContext.Provider>
    )
}