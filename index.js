const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.staging.sushirelay.com/v1',
  headers: { 
    'Content-Type': 'application/json'
  },
  timeout: 1000
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
