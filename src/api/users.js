import sendRequest from "./shared"

function registerNewUser(properties) {
    console.log(
        "src/api/users#registerNewUser was called with the following properties",
        properties
      );
    
      return sendRequest({
        url: "/api/register",
        params: properties
      })
}

async function authenticate(properties) {
    console.log(
      "src/api/users#authenticate was called with the following properties",
      properties
    );
  
    const apiParams = {
      login: properties.login,
      password: properties.password,
    }
  
    return sendRequest({
      url: "/api/login",
      params: apiParams
    })
  
  }

  export default {
    registerNewUser,
    authenticate,
  };