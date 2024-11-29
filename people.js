const name = require('./names.js');
const hobby = require('./hobbies.js');

const firstName = process.argv[2];
const lastName = process.argv[3];
const [hobby1, hobby2, hobby3] = [process.argv[4], process.argv[5], process.argv[6]];
function createPerson() {
    const fullName = name(firstName, lastName);
    const hobbies = hobby(hobby1, hobby2, hobby3);
    return { fullName: fullName, hobbies: hobbies };
}

const person = createPerson();
console.log(person);