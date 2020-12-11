import React,{useContext} from "react";
import {Redirect} from "react-router-dom";

//import { AuthenticationContext } from "contexts/Authentication/Authentication";


const Logout = () => {
    //const {setCurrentJWT} = useContext(AuthenticationContext);
    //setCurrentJWT("");
    return <Redirect to="/" />;
}

export default Logout;
