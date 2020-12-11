import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/Authentication";

function SecuredRoute({children,...otherProps}){
    const {isAuthenticated} = useContext(AuthenticationContext);
    if (isAuthenticated())
        return <Route {...otherProps}>{children}</Route>;
    else
        return <Redirect to="/login" />;
}

export default SecuredRoute;
