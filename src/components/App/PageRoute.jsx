import React from "react";
import { Switch, Route } from "react-router-dom";
import SecuredRoute from "./SecuredRoute"

import Register from "../Register/Container";
import Login from "../Login/Container";
import Logout from "../Logout/Container";
import CodePage from "../CodePage/Container";
import ListCodesPage from "../ListCodesPage/Container"

function PageRoute() {
    return (
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/code" component={CodePage}/>
            <Route path="/list" component={ListCodesPage}/>

            <SecuredRoute path="/" component={CodePage} />
        </Switch>
    );
}

export default PageRoute;