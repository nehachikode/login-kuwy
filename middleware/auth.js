const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "Sunshine!";
const con = require('../config/dbConfig');
const userModel = require('../models/users');

module.exports = async function (req, res, next) {

    let token = req.headers['authorization'];

    if (!token) {
        // send 401 if a token is not provided
        return res.status(401).send({ message: 'Missing access token!', data: null, err: null });
    }

    let date = Math.round(new Date().getTime() / 1000);
    // decode token and attach userId to the request
    let data = jwt.decode(token, TOKEN_SECRET);

    if (data.exp > date) {

        try {
            var checkUser = await userModel.checkEmail(con, email);
        } catch (error) {
            return res.status(500).send({ message: 'Something went wrong!', data: null, err: error });
        }

        //if not
        if (!checkUser.length) {
            return res.status(200).send({ message: 'Invalid user!', data: null, err: null });
        }

        req.email = checkUser[0].email;
        req.userId = checkUser[0].id;
        req.userName = checkUser[0].name;
        req.contact_no = checkUser[0].contact_no;

        next();

    } else {
        res.status(401).send({ message: 'Token expired!', data: null, err: null });
    }

};