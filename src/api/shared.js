
let storedJwt = "";

function storeJwtForFutureRequests(jwt) {
    storedJwt = jwt
}

async function sendRequest({
    url,
    params = null,
    method = "POST",
}) {
    const headers = {
        "Content-Type": "application/json"
    }

    if (storedJwt !== "") {
        headers["Authorization"] = `Bearer ${storedJwt}`
    }

    const response = await fetch(url, {
        method: method,
        body: params && JSON.stringify(params),
        headers: headers,
    });


    const json = await response.json();

    if (json.success) {
        return json;
    } else {
        throw Error(json.error);
    }
}


export default sendRequest;

export {
    storeJwtForFutureRequests,
    sendRequest,
};