module.exports = (app) => {
    app.use('/users', require('../routes/users'))
    app.use('/loan', require('../routes/loan'))
};