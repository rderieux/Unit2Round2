function castFireball() {
  console.log("Charging up...");
  console.log("FIREBALL!");
}

castFireball();

// Another syntax to declare a function is to explicitly treat it like a variable
const cookNoodles = () => {
  console.log("Kneading dough.");
  console.log("Add to boiling water.");
};

cookNoodles();

//We can also declare non-hoisted functions
// An anonymous function declared with the `function` keyword
const bakeCake = function () {
  console.log("Baking the cake!");
};

bakeCake();

// Another common convention is to create a shorter alias
// to a function with a longer, more descriptive name
// nickname, moniker, alias
const greet = function sayHelloToEveryone() {
  console.log("Hello, everyone!");
};

// === Input / Output ===
console.log("=== Input/Output ===");

function add5(x) {
  return x + 5;
}

function add(num1, num2) {
  const sum = num1 + num2;
  // `return` denotes the output, which must be a single value
  return sum;
}

function addConcise(n1, n2) {
  return n1 + n2;
}

const addArrow = (n1, n2) => {
  return n1 + n2;
};

// We pass **arguments** into the function when we call it.
// If we want to use a function's output, we store it in a variable
const sum = add(-5, 10);
// We call the function add with -5 and 10 as the arguments.
// `add` returns the value (-5 + 10) >>> 5
// const sum1 = 5;
console.log(sum);

// We can use a **block** {} to isolate code.
{
  // We can also use functions with types that are not numbers.
  // 1. Define the function w/ parameters.
  /**
   * Greet the person with the given name.
   *
   * @param {string} name - the name of the person to greet
   * @returns {string} a message that greets the given name
   */
  function sayHi(name) {
    // const greeting = "Hello " + name + "!";

    // A **template literal** is a shortcut to include variables directly
    // within a string as syntactic sugar for string concatenation.
    // These are denoted by backticks (`)

    const greeting = `Hello ${name}!`;
    return greeting;
  }

  // 2. Call the function with arguments and store it in a new variable
  const message = sayHi("Lester");

  // 3. We log it so we can see the output in the terminal
  console.log(message);

  // We could just log the function call directly,
  // but then we're not storing the output in a variable
  // which means we can't reuse the output.
  console.log(sayHi("Lester"));
}

{
  // This function does not return anything
  function foo() {
    console.log("foo"); // Just logging foo, not returning
    // return "foo"; // Here foo is being returned
  }

  // What gets stored if I store the return in a variable?
  const output = foo();
  console.log(output);
}

{
  // JSDoc is a conventional way to document JavaScript
  // JSDoc indicated by /** */ as opposed to regular comment /* */

  /**
   * Calculates the difference between the two given numbers.
   *
   * @param {number} num1 - the number to subtract from
   * @param {number} num2 - the number we're subtracting
   * @returns {number} the difference between `num1` and `num2`
   */
  function subtract(num1, num2) {
    return num1 - num2;
  }
}

{
  // Function syntax - hoisted
  function fn(foo, bar) {
    return "baz";
  }

  // Arrow syntax - not hoisted
  const fn1 = (foo, bar) => {
    return "baz";
  };

  // Shorthand arrow syntax
  // You can only use this shorthand when the body of the function is
  // a 1-line return statement
  const fn2 = (foo, bar) => "baz";
}
