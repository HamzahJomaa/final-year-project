const {mg} = require("../Config/MailgunConfig")


exports.sendConfirmation = ({user}) => {
    const data = {
        from: 'RHU FINAL YEAR PROJECT <info@rhu-computerscience.tech>',
        to: `${user.email}`,
        subject: `FYP Confirmation Email`,
        template: "confirmationemail",
        'v:fullname': user.username,
        'v:confrimationLink': `${process.env.ENVIROMENT === "dev" ? process.env.HOST_DEV : process.env.HOST_PROD}/login?userid=${user.token}`,
    };
    return mg.messages()
        .send(data)
        .then(res => {
            console.log(res)
            return true
        })
        .catch(err => {
                console.error(err)
                return false
            }
        );
}


exports.sendReset = ({user}) =>{
    const data = {
        from: 'RHU FINAL YEAR PROJECT <info@rhu-computerscience.tech>',
        to: `${user.email}`,
        subject: `FYP Reset Password`,
        template: "resetemail",
        'v:fullname': user.firstName + " " + user.lastName,
        'v:resetLink': `${process.env.ENVIROMENT === "dev" ? process.env.HOST_DEV : process.env.HOST_PROD}/reset?userid=${user.token}`,
    };
    return mg.messages()
        .send(data)
        .then(res => {
            return true
        })
        .catch(err => {
                console.error(err)
                return false
            }
        );
}