// ? Question-9:Follow the steps below:
// TODO-1: Write an object and add two properties: name and age.
// ToDo-2: Write a method for this object; this method must print 'string' in the console. Like => `Hello, my name is {name for example Jasem}, and I am {age for example 120} years old.`
// hint: To access properties in the method you must use "this" keyword.
// !Answer:


const data = {
    name: "rezvan",
    age: 4321,
}

function getData(obj){
for (const getData in obj){
    return `Hello, my name is ${obj[getData]}, and I am ${obj[getData]} years old.`
}
}

let result = getData(data);
console.log(result);