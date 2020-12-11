import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "../../contexts/Authentication";
import './App.css';
import Layout from "./Layout";

function App() {
  return(
    <AuthenticationProvider>
      <Router>
        <Layout/>
      </Router>
    </AuthenticationProvider>
    
  );
}

export default App;
