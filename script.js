//zadanie 1

const hello = "Hello ";
const world = "world";

const helloWorld = (`${hello + world}`);
console.log(helloWorld);

//zadanie 2

const multiply = (a = 1, b = 2) => console.log(a * b);
multiply(2, 8);
multiply(4);

//zadanie 3

const average = (...args) =>
{
  let sum = 0;
  args.forEach(arg => {
    sum += arg;
  });
  console.log(sum / args.length);
};
average(2);
average(3,5);
average(1, 3, 5, 8);

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//zadanie 5
const data = [1, 4, 'Iwona', false, 'Nowak'];

const [ , ,firstname, ,lastname] = data;
console.log(firstname, lastname);
