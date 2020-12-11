import React,{useContext} from "react";

import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import { AuthenticationContext } from "../../contexts/Authentication";
import NavLinkItem from "./NavLinkItem";

function Navigation() {

  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <Navbar expand="sm">
      <Nav className="mr-auto">
        {/*<NavLinkItem as={Link} to="/" >Dashboard</NavLinkItem>}*/}

        {! isAuthenticated() && 
          <>
            <NavLinkItem as={Link} to="/register" >Register</NavLinkItem>
            <NavLinkItem as={Link} to="/login">Login</NavLinkItem>
          </>
        }
        { isAuthenticated() && 
          <>
            <NavLinkItem as={Link} to="/logout">Logout</NavLinkItem>
            <NavLinkItem as ={Link} to="/list">List of your codes</NavLinkItem>
            <NavLinkItem as={Link} to="/code">Generate A New Code</NavLinkItem>
          </>
        }
      </Nav>
    </Navbar>
  );
}

export default Navigation;
