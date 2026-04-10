const http = require('http');

// Test 1: Check eligibility for John Doe (eligible)
function testEligibility() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/check-eligibility/John%20Doe',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('=== Eligibility Test ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with eligibility request: ${e.message}`);
  });

  req.end();
}

// Test 2: Submit feedback as John Doe
function testFeedbackSubmission() {
  const data = JSON.stringify({
    username: 'John Doe',
    feedback: 'The teaching methods are excellent and the explanations are very clear. I appreciate the practical examples used in class.'
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
    console.log('\n=== Feedback Submission Test ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with feedback submission: ${e.message}`);
  });

  req.write(data);
  req.end();
}

// Test 3: Retrieve feedbacks to verify
function testFeedbackRetrieval() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/feedbacks',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Feedback Retrieval Test ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with feedback retrieval: ${e.message}`);
  });

  req.end();
}

// Run all tests
testEligibility();
setTimeout(testFeedbackSubmission, 1000);
setTimeout(testFeedbackRetrieval, 2000);
