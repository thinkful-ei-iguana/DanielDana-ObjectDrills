/* eslint-disable strict */
/* eslint-disable no-console */
//////first Drill/////
const users = [
  {
    name: 'Bernard',
    age: 29,
    birthMonth: 'April',
  },
  {
    name: 'Bernice',
    age: 14,
    birthMonth: 'December',
  },
  {
    name: 'Gerard',
    age: 88,
    birthMonth: 'June',
  },
  {
    name: 'Stella',
    age: 3,
    birthMonth: 'September',
  },
];
  
users.forEach(user =>
  console.log(`${user.name} will be ${user.age + 1} in ${user.birthMonth}`)
);
  
////////// second Drill //////

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  // your code here
}
  
/* From here down, you are not expected to understand.... for now :)
    Nothing to see here!
  
  */
  
// tests
  
function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];
  
  var results = enrollInSummerSchool(testData);
  
  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
          _student.course === student.course &&
          _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
          'original key/value pairs for each student, and ' +
          'update `status` to "In Summer school": ' +
          JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}
  
testIt();
  
///////third Drill///////////

// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
  // your code here
}
  
//
  
function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}
  
testIt();
  