import React, { useState } from "react";
import QRious from "qrious";
import { Redirect } from "react-router-dom";

import codesApi from '../../api/codes';
//import usersApi from '../../api/users';

import PageComponent from './PageComponent';

const Container = () => {
    const [qrCode, setQrCode] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const QRGenerator = () => {
        new QRious({
            element: document.getElementById("qr-div"),
            value: "qsmldkfjqmlsdkfj"//la string détermine le code qr
        });
    };

    const code = async e => {
        e.preventDefault();
        const code = {
            qrCode
        }
        setButtonDisabled(true)
        codesApi
            .generateNewCode(code)
            .then((receivedCode) => {
                setRedirect(true)
            })
            .catch((error) => {
                setButtonDisabled(false)
                setErrorMessage(error.message);
            })
    };
    if (redirect){
        return <Redirect to="/code"/>
    }

    return (
        <PageComponent
            qrCode={qrCode}
            errorMessage={errorMessage}

            setQrCode={setQrCode}

            QRGenerator={QRGenerator}
            
            buttonDisabled={buttonDisabled}
            code={code}
        ></PageComponent>
    )
}

export default Container;