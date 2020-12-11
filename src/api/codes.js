import sendRequest from "./shared"

function generateNewCode(properties) {
    console.log(
        "src/api/codes#generateNewCode was called with the following properties",
        properties
    );
    return sendRequest({
        url: "/api/code",
        params: properties
    })
}

function listCodesOfUser(properties){
    console.log(
        "src/api/codes#listCodesOfUser was called with the following properties",
        properties
    );
    return sendRequest({
        url: "/api/list",
        params: properties
    })
}

export default {
    generateNewCode,
    listCodesOfUser
}