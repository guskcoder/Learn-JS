const https = require('https');

const API = 'https://jsonplaceholder.typicode.com/users';

https.get(API, (res) => {
  console.log(res.statusCode);
});

console.log('Chamada na Api');
