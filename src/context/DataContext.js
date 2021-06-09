import React, {createContext, useState} from 'react';

export const DataContext = createContext()

const InitialCities =['Barcelona', 'Madrid']

export const DataProvider = ({ children }) =>{

    const [ciudad, setCiudad] =  useState(InitialCities)

    return (
        <DataContext.Provider value={{
            ciudad, 
            setCiudad
        }}>
            {children}
        </DataContext.Provider>
    )
}