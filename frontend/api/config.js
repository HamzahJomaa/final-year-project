const domainUrl = "http://localhost:3000/api"


const RetrieveStream = (stream,page,callback) =>{
    $.ajax({
        method: "get",
        url: `${domainUrl}/stream/${stream}/10/${page}`,
    }).then(function( returned_data ) {
        callback(returned_data)
    }).catch(err=>{
        console.error(err)
        return false
    })
}