import React,  { useState } from 'react';
import { storeJwtForFutureRequests } from "../api/shared";

const LOCALSTORAGE_KEY = 'authentication-token';

const AuthenticationContext = React.createContext({
  JWT:"",
  isAuthenticated: () => {},
  setCurrentJWT:() => {},
});

const loadTokenFromLocalStorage = () => {
    const serializedToken = localStorage.getItem(LOCALSTORAGE_KEY);
    if( serializedToken )
        return JSON.parse(serializedToken);
    else
        return "";
};

const saveTokenToLocalStorage = ( token ) => {
    const serializedToken = JSON.stringify(token);
    localStorage.setItem(LOCALSTORAGE_KEY, serializedToken);
};


const AuthenticationProvider= ({children})=> {
    //load the token from localStorage
    const storedJWT  = loadTokenFromLocalStorage();
    storeJwtForFutureRequests(storedJWT);
    
    // Initialize the current JWT    
    const [JWT,setJWT] = useState(storedJWT);    

    // Initialize the context function to return authentication status
    const isAuthenticated = () => {      
        return JWT && JWT !== "";
    }
    // Initialize the context function to update the state and save to localStorage
    const setCurrentJWT = (token) => {            
         setJWT(token);
         saveTokenToLocalStorage(token);
        storeJwtForFutureRequests(token);
    }
    const providerData = {JWT,isAuthenticated,setCurrentJWT};
    return(
        <AuthenticationContext.Provider value={providerData}>
            {children}
        </AuthenticationContext.Provider>
    )    
}

export {
    AuthenticationContext,
    AuthenticationProvider,
}