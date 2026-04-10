const http = require('http');

// Test 1: Add a student with high attendance (eligible)
function testAddEligibleStudent() {
  const data = JSON.stringify({
    name: 'Sarah Wilson',
    attendance: 92
  });

  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/students',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    console.log('=== Adding Eligible Student ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem adding student: ${e.message}`);
  });

  req.write(data);
  req.end();
}

// Test 2: Add a student with low attendance (not eligible)
function testAddIneligibleStudent() {
  const data = JSON.stringify({
    name: 'Mike Brown',
    attendance: 65
  });

  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/students',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Adding Ineligible Student ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem adding student: ${e.message}`);
  });

  req.write(data);
  req.end();
}

// Test 3: Submit feedback with class and module
function testFeedbackWithClassModule() {
  const data = JSON.stringify({
    username: 'Sarah Wilson',
    feedback: 'The teaching methods are excellent and the examples really help understand complex concepts. Great class!',
    class: 'Class A',
    module: 'Module 3'
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
    console.log('\n=== Submitting Feedback with Class & Module ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem submitting feedback: ${e.message}`);
  });

  req.write(data);
  req.end();
}

// Test 4: Verify feedback stored with class and module
function testRetrieveFeedbacks() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/feedbacks',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Verifying Feedback Storage ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Feedbacks:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem retrieving feedbacks: ${e.message}`);
  });

  req.end();
}

// Test 5: Check eligibility of eligible student
function testEligibleStudentLogin() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/check-eligibility/Sarah%20Wilson',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Checking Eligible Student Login ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Eligibility:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem checking eligibility: ${e.message}`);
  });

  req.end();
}

// Test 6: Check eligibility of ineligible student
function testIneligibleStudentLogin() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/check-eligibility/Mike%20Brown',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Checking Ineligible Student Login ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Eligibility:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem checking eligibility: ${e.message}`);
  });

  req.end();
}

// Run all tests in sequence
testAddEligibleStudent();
setTimeout(testAddIneligibleStudent, 1000);
setTimeout(testFeedbackWithClassModule, 2000);
setTimeout(testRetrieveFeedbacks, 3000);
setTimeout(testEligibleStudentLogin, 4000);
setTimeout(testIneligibleStudentLogin, 5000);
