import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

//import { AuthenticationContext } from "contexts/Authentication/Authentication";
import usersApi from '../../api/users'
import codesApi from '../../api/codes'

import PageComponent from './PageComponent';

const Container = () => {
    const [siteName, setSiteName] = useState("");
    const [nbSelections, setNbSelections] = useState("");
    const [strongPoints, setStrongPoints] = useState("");
    const [weakPoints, setWeakPoints] = useState("");

    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const list = async e => {
        e.preventDefault();
        const site = {
            siteName,
            nbSelections,
            strongPoints,
            weakPoints
        };

        codesApi
            .submitNewSite(list)
            .then((receivedList) => {
                setRedirect(true)
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
        
    };

    if (redirect){
        return <Redirect to="/list" />
    }

    return (
        <PageComponent
            siteName={siteName}
            nbSelections={nbSelections}
            strongPoints={strongPoints}
            weakPoints={weakPoints}
            errorMessage={errorMessage}

            setSiteName={setSiteName}
            setNbSelections={setNbSelections}
            setStrongPoints={setStrongPoints}
            setWeakPoints={setWeakPoints}

            list={list}
        ></PageComponent>
    );
}

export default Container;