import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../contexts/Authentication";
import usersApi from '../../api/users'

import PageComponent from './PageComponent';

const Container = () => {
    const[establishmentName, setEstablishmentName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { setCurrentJWT } = useContext(AuthenticationContext);


    const authenticate = async e => {
        e.preventDefault();

        const credentials = {
            establishmentName,
            login,
            password
        };

        setButtonDisabled(true);

        usersApi
            .authenticate(credentials)
            .then((session) => {
                setCurrentJWT(session.authenticationToken);
                setRedirect(true)
            })
            .catch((error) => {
                setButtonDisabled(false)
                setErrorMessage(error.message);
            })
    };
    //render
    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <PageComponent
            {...{
                errorMessage,
                login,
                establishmentName,
                password,
                setEstablishmentName,
                setLogin,
                setPassword,
                buttonDisabled,
                authenticate,
            }}
        ></PageComponent>
    );
}

export default Container;
