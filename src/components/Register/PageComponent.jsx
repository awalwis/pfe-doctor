import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBAlert } from "mdbreact";


function PageComponent({
  establishmentName,
  login,
  password,
  errorMessage,
  setEstablishmentName,
  setLogin,
  setPassword,
  buttonDisabled,
  register,
}) {

  const passExtractedValue = (delegate) => (e) => delegate(e.target.value)

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <form
            noValidate
            onSubmit={register}
          >
            <p className="h5 text-center mb-4">Sign up</p>

            {errorMessage && errorMessage !== "" &&
              <MDBAlert color="danger" >
                { errorMessage }
              </MDBAlert>
            }

            <div className="grey-text">
              <MDBInput
                label="Your establishment's name"
                hint="Establishment"
                icon="user"
                group
                type="text"


                value={establishmentName}
                onChange={passExtractedValue(setEstablishmentName)}
              />

              <MDBInput
                label="Your login"
                hint="Login"
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
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PageComponent;
