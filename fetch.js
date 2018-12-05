const fetch = require('node-fetch');

module.exports = url => {
  return fetch(url).then(res => res.status);
}