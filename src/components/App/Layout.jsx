import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navigation from "../Navigation/Navigation";
import PageRoute from "./PageRoute"


function Layout() {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <Navigation />
                </MDBCol>
            </MDBRow>
            <MDBRow className="pt-5 mt-5">
                <MDBCol>
                    <PageRoute/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Layout;