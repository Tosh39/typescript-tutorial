// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// Sections
// - Interfaces
// -------------------------------------

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
