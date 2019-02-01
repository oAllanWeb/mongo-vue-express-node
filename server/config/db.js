const mongoose = require('mongoose')

const dbURI = "mongodb://" + process.env.M_USER + ":" + process.env.M_PASSWORD +"@ds151354.mlab.com:51354/"+process.env.M_DB
console.log(dbURI)
mongoose.Promise = global.Promise
mongoose.connect(dbURI)

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection connected to ' + dbURI)
})

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection err ' + err)
})

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connectios disconnected')
})

mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open')
})

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

module.exports = mongoose