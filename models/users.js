const DB = {
    USERS: 'users',
};

module.exports = {
    checkEmail: async function (con, email) {
        return new Promise(function (resolve, reject) {
            let query = `
                select 
                    *
                from 
                    ${DB.USERS}
                where
                    email = ${email}
            `;
            con.query(query, function (err, rows, fields) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    },
}