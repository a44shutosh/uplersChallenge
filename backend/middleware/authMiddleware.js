const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyToken = (req, res, next) => {
    const header = req.headers['authorization']; // Ensure header key is in lowercase

    if (!header) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const bearer = header.split(' '); // Split the header into "Bearer" and the token
    const token = bearer[1]; // Get the token from the split array

    if (!token) {
        return res.status(403).json({ message: 'Bearer token not provided' });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.userId = decoded.id;
        next();
    });
};
