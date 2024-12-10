// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

const innerFunction = (a, b) => {
  return a * b;
};

const outherFunction = (one, two) => {
    return innerFunction(one, two);
}

const result = outherFunction(8,3);
console.log(result);
