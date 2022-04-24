const {mg} = require("../Config/MailgunConfig")


exports.sendConfirmation = ({user}) => {
    const data = {
        from: 'RHU FINAL YEAR PROJECT <info@rhu-computerscience.tech>',
        to: `${user.email}`,
        subject: `FYP Confirmation Email`,
        template: "confirmationemail",
        'v:fullname': user.username,
        'v:confrimationLink': `${process.env.NODE_ENV === "dev" ? process.env.HOST_DEV : process.env.HOST_PROD}/auth/confirm?userid=${user.token}`,
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
        'v:resetLink': `${process.env.NODE_ENV === "dev" ? process.env.HOST_DEV : process.env.HOST_PROD}/profile/reset?userid=${user.token}`,
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