import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBAlert } from "mdbreact";


function PageComponent({
  login,
  password,
  errorMessage,
  setLogin,
  setPassword,
  buttonDisabled,
  authenticate,
}) {

  const passExtractedValue = (delegate) => (e) => delegate(e.target.value)

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <form
            noValidate
            onSubmit={authenticate}
          >
            <p className="h5 text-center mb-4">Sign in</p>

            { errorMessage && errorMessage !== "" && 
              <MDBAlert color="danger" >
                { errorMessage }
              </MDBAlert>
            }

            <div className="grey-text">            

              <MDBInput
                label="Your login"
                icon="user"
                group
                type="text"

                value={login}
                onChange={passExtractedValue(setLogin)}
              />

              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"

                value={password}
                onChange={passExtractedValue(setPassword)}
              />

            </div>
            <div className="text-center">
              <MDBBtn color="primary" type="submit" disabled={buttonDisabled}>
                Authenticate
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PageComponent;
