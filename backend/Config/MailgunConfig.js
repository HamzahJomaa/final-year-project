require("dotenv").config();
const mailgun = require("mailgun-js");
exports.mg = mailgun({apiKey: process.env.MAILGUN_API, domain: process.env.DOMAIN,public_key:"pubkey-26f19f34326a0fda611f1541a7b93a0d\n"});