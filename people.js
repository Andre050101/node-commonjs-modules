const name = require('./names.js');
const hobby = require('./hobbies.js');

const firstName = process.argv[2] || "name";
const lastName = process.argv[3] || "surname";
const [hobby1, hobby2, hobby3] = [process.argv[4] || "Hobby1", process.argv[5] || "Hobby2", process.argv[6] || "hobby3"];
function createPerson() {
    const fullName = name(firstName, lastName);
    const hobbies = hobby(hobby1, hobby2, hobby3);
    return { fullName: fullName, hobbies: hobbies };
}

const person = createPerson();
console.log(person);