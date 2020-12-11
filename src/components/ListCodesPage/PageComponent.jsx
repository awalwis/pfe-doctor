import React from "react";
import ListItem from "./Item/ListItem";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBAlert } from "mdbreact";


function PageComponent({
    /*
  siteName,
  nbSelections,
  strongPoints,
  weakPoints,
  errorMessage,
  setSiteName,
  setNbSelections,
  setStrongPoints,
  setWeakPoints,
  list,*/
}) {

  return (
    <MDBContainer>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope ="col">Position</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </MDBContainer>
  );
}

export default PageComponent;
