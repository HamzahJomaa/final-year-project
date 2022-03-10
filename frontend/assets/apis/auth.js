$(document).ready(function () {


    $("#login_form").submit(function (e) {
        e.preventDefault()
        let data = GetSerialized($(this).serialize())
        $.ajax({
            method: "patch",
            url: 'https://rhu-computerscience.tech/api/auth/signin/',
            data
        }).done(function( msg ) {
            if(msg.statusCode === 200){
                localStorage.setItem("userId","id")
            }
        });
    })


})


const GetSerialized = (serialize) =>{
    let array = serialize.split("&")
    let objct = {}
    array.map(element=>{
        objct[element.split("=")[0]] = element.split("=")[1]
    })
    return objct
}