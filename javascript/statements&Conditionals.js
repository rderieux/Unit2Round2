/*
In code, a condition is represented by a **boolean expression**.
A boolean expression is an expression that evaluates to a single boolean.

`>>>` is shorthand for "evaluates to"

A **comparison operator** compares the two operands and evaluates to a boolean.

10 > 5 >>> true
15 + 5 < 18 >>> false
5 === 5 >>> true

6 comparison operators: >, >=, <, <=, ===, !==

===: Strict Equality <-- default
==: Loose Equality <-- prone to bugs

5 === "5" >>> false
5 == "5" >>> true

A **logical operator** expects booleans as operands.

AND `&&` -> true when both operands are true; otherwise false
true && true >>> true
false && true >>> false

OR `||` -> true when at least one operand is true; otherwise false
false || false >>> false
true || false >>> true

XOR is just `!==`
false XOR false

NOT `!` -> flips the value of its operand
!false >>> true
!true >>> false
*/

/*
Aside: short-circuiting

A boolean expression involving a logical operator can short-circuit if it is
clear what the resulting value will be without looking at both operands.
This can happen because expressions are evaluated from left to right.

ANDs require both operands to be true. If the left operand is false, then we
can short-circuit and immediately return false without looking at the right operand.

true && ??? - I need to look on the right side
false && ??? - the right side doesn't matter, the output will be false

true || console.log("Not printed.")
false || console.log("Printed")

errorExists && console.error("Some error message");
*/

const isRaining = true;
const isHungry = false;

// A conditional starts with the `if` keyword
// In the parentheses, we put a boolean expression (condition)
// In the curly braces (body), we put the code we want to happen
if (isRaining) {
  console.log("stay indoors");
}
// Dependent conditions use the `else if` keyword
// A dependent condition means we only check it depending on some other condition
// We can have as many else-ifs as we want chaining off of the initial `if`
else if (isHungry) {
  console.log("have a picnic");
}
// To end the conditional, you can have an _optional_ `else`
// Else: all previous conditions are false
else {
  console.log("play soccer");
}

// An independent condition always starts another `if` chain
if (isRaining) {
  console.log("stay indoors");
}

if (isHungry) {
  console.log("have a picnic");
}

// === https://javascript.info/ ===

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

if (age >= 14 || age <= 90) {
  return false;
} else {
  return true;
}

if (age >= 14 || age <= 90);
if (!(age >= 14 && age <= 90));

let user = prompt("Who's there?", "");

if (user === "Admin") {
  let password = prompt("Password", "");

  if (password === "" || password === null) {
    alert("Cancelled.");
  } else if (password === "TheMaster") {
    alert("Welcome!");
  } else {
    alert("Wrong password.");
  }
} else if (user === "" || user === null) {
  alert("Cancelled.");
} else {
  alert("I don't know you.");
}

function checkAgeTernary(age) {
  return age > 18 ? true : confirm("Did your parents allow you?");
}

function checkAgeOr(age) {
  return age > 18 || confirm("Did your parents allow you?");
}

function getMinWithIf(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

function getMinTernary(a, b) {
  return a < b ? a : b;
}

function getPow(x, n) {
  if (n >= 1) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }

  return alert("n must be 1 or greater.");
}
