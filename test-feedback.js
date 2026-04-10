const http = require('http');

const data = JSON.stringify({
  username: 'test_student',
  feedback: 'This is a great course with excellent teaching methods and clear explanations.'
});

const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/submit-feedback',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
