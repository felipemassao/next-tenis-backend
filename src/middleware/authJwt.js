const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({
            message: "Token não informado"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Não autorizado"
            });
        }
        req.userId = decoded.userId
        next();
    });
};

module.exports = {
    verifyToken
};