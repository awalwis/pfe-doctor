import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../contexts/Authentication";
import usersApi from '../../api/users'

import PageComponent from './PageComponent';

const Container = () => {
    const [establishmentName, setEstablishmentName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { setCurrentJWT } = useContext(AuthenticationContext);


    const register = async e => {
        e.preventDefault();

        const user = {
            login,
            password,
        };

        setButtonDisabled(true)
        usersApi
            .registerNewUser(user)
            .then((receivedUser) => {
                setCurrentJWT(receivedUser.authenticationToken);
                setRedirect(true)
            })
            .catch((error) => {
                setButtonDisabled(false)
                setErrorMessage(error.message);
            })
        
    };

    if (redirect){
        return <Redirect to="/" />
    }

    return (
        <PageComponent
            establishmentName={establishmentName}
            login={login}
            password={password}
            errorMessage={errorMessage}

            setEstablishmentName={setEstablishmentName}
            setLogin={setLogin}
            setPassword={setPassword}

            buttonDisabled={buttonDisabled}
            register={register}
        ></PageComponent>
    );
}

export default Container;
