// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// Sections
// - Building your first TypeScript file
// - Compiling your code
// - Type annotations
// -------------------------------------

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
