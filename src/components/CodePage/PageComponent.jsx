import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBAlert } from "mdbreact";

function PageComponent({
    qrCode,
    errorMessage,
    setQrCode,
    QRGenerator,
    buttonDisabled,
    code,
}) {
    
    const passExtractedValue = (delegate) => (e) => delegate(e.target.value)

    return (
        <MDBContainer>
            <MDBRow center>
                <MDBCol md="6">
                    <form
                        noValidate
                        onSubmit={code}
                    >
                    </form>
                    <div className="App">
                        <canvas id="qr-div" />
                        <br />
                        <button onClick={QRGenerator}> Generate QR </button>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default PageComponent;