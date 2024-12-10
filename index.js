//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

var look = "I'm a bad var!";

const insteadOfVar = () => {
  console.log(
    `in this example I use const, arrow function and back tick. var is so bad! because now I can access to it even it isn't in this scope, look: ${look}`
  );
};
insteadOfVar();

// === //

let destructuring = ["bahar", "tabestan", "paeez", "zemestan"];

const [first, second, third, forth] = destructuring;
console.log(
  `the best season is: ${third} :), anddddddd I use let and destructuring in this exa too.`
);
