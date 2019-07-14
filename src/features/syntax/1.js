import { print } from "../../util/logger";

//revision link (http://kangax.github.io/compat-table/es6/)

/**
 * DEFAULT FUNCTION PARAMETER
 */


function multiply(a, b =1) {
    return a * b;
}

print(multiply(5,2));
print(multiply(5));



function greet(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message];
}


const r1 = greet('David', 'Hi');
print(r1);

const r2 = greet('David', 'Hi', 'Happy Birthday!');
print(r2);