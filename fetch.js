const fetch = require('node-fetch')

module.exports = url => fetch(url).then(res => res.status)