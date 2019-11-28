const bcrypt = require('bcrypt');
const { generateToken } = require('../helpers/global');
//const con = require('../config/dbConfig');
const userModel = require('../models/users');

module.exports = {
    logIn: async (req, res, next) => {

        //for live body will be req.body
        let body = {
            email: "nehachikode@gmail.com",
            password: "neha123"
        }

        if (!body.email || !body.password) {
            res.status(400).send({ message: 'Both email and password are required!', data: null, err: null });
        }

        let email = body.email,
            password = body.password;

        //first check user is exist or not
        /*
            As DB is not connected, commenting the code

            try {
                var checkUser = await userModel.checkEmail(con, email);
            } catch (error) {
                return res.status(500).send({ message: 'Something went wrong!', data: null, err: error });
            }

            //if not
            if (!checkUser.length) {
                return res.status(200).send({ message: 'User is not registered!', data: null, err: null });
            }
        */

        //if yes
        /* while registering the user, password will be saved in encrypted format
            const SaltRounds = 10;
            let salt = bcrypt.genSaltSync(SaltRounds);
            let hash = bcrypt.hashSync(password, salt);
            hash will be saved in DB 
        */

        /* so DB password, 
            hash = checkUser[0].password = dbPassword 
        */

        let dbPassword = "$2b$10$Ms1Wfmf22tn1zceKoUTFrOo9c9JHppfKe4LTQHtweeYjP3jjzbcj2";
        try {
            bcrypt.compare(password, dbPassword, function (err, result) {
                if (err) {
                    return res.status(500).send({ message: 'Something went wrong!', data: null, err: err });
                } else if (result == false) {
                    return res.status(400).send({ message: 'Invalid password!', data: null, err: null });
                } else {
                    let tokenData = {
                        sub: email
                    };

                    let token = generateToken(tokenData);

                    data = {
                        token: token
                    }

                    res.status(200).send({ message: 'User logged in successfully!', data: data, err: null });
                }
            })
        } catch (error) {
            return res.status(500).send({ message: 'Something went wrong!', data: null, err: error });
        }
    },
}