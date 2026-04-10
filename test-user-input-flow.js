const http = require('http');

// Test 1: Check if student list is empty initially
function testEmptyStudents() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/students',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('=== Initial State: Empty Student List ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Students:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
  });

  req.end();
}

// Test 2: Add a student via API (simulating HackAI teacher action)
function testAddStudent() {
  const data = JSON.stringify({
    name: 'Alice Johnson',
    attendance: 85
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
    console.log('\n=== Adding Student (Teacher Action) ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Response:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with adding student: ${e.message}`);
  });

  req.write(data);
  req.end();
}

// Test 3: Check if student was added
function testStudentAdded() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/students',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Verifying Student Added ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Students:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
  });

  req.end();
}

// Test 4: Check eligibility of added student
function testEligibility() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/check-eligibility/Alice%20Johnson',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Checking Student Eligibility ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Eligibility:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with eligibility check: ${e.message}`);
  });

  req.end();
}

// Test 5: Submit feedback as the eligible student
function testFeedbackSubmission() {
  const data = JSON.stringify({
    username: 'Alice Johnson',
    feedback: 'The teaching methods are excellent and the explanations are very clear. I really appreciate the practical examples used in class.'
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
    console.log('\n=== Submitting Feedback (Student Action) ===');
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

// Test 6: Verify feedback appears in system
function testFeedbackRetrieval() {
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/feedbacks',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log('\n=== Verifying Feedback in System ===');
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('Feedbacks:', chunk);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with feedback retrieval: ${e.message}`);
  });

  req.end();
}

// Run all tests in sequence
testEmptyStudents();
setTimeout(testAddStudent, 1000);
setTimeout(testStudentAdded, 2000);
setTimeout(testEligibility, 3000);
setTimeout(testFeedbackSubmission, 4000);
setTimeout(testFeedbackRetrieval, 5000);
