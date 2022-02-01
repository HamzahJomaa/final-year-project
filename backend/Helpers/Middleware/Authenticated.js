const jwt = require("jsonwebtoken");
const {UnAuthorized, TokenNeeded} = require("../../Constants/statusCodes");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"]
    if (!token) {
        return res.status(403).json(TokenNeeded);
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
    } catch (err) {
        console.error(err)
        return res.status(401).json(UnAuthorized);
    }
    return next();
};

module.exports = verifyToken;