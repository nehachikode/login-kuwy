const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "Sunshine!";

module.exports = {
    generateToken: function (data) {
        return jwt.sign(data, TOKEN_SECRET, { algorithm: 'HS512', expiresIn: '1h' });
    },
}