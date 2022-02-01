exports.UserExists = {
    statusCode: 409,
    statusMessage: "User Already Exists"
}

exports.TokenNeeded = {
    statusCode: 403,
    statusMessage: "A token is required for authentication"
}

exports.UnAuthorized = {
    statusCode: 401,
    statusMessage: "User Unauthorized"
}

exports.NoContent = {
    statusCode: 204,
    statusMessage: "Empty Data"
}

exports.DynamicMessage = (code,error) =>{
    return {
        statusCode: code,
        statusMessage: error
    }
}


exports.RetrievedData = (code,data) =>{
    return{
        statusCode: code,
        statusMessage: "Data Retrieved Successfully",
        data
    }
}

exports.AddedMessage = (code,data) =>{
    return{
        statusCode: code,
        statusMessage: "Document Added Successfully",
        data
    }
}

exports.InternalServerError = {
    statusCode: 500,
    statusMessage: "Internal Server Error"
}