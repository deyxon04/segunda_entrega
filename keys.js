'use strict'

const keys = {
    uri:   'mongodb+srv://admin:admin@cluster0-kuzxw.mongodb.net/test?retryWrites=true' || process.env.URIDB,
    port  : process.env.PORT || 3000
}

module.exports = keys