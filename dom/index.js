// === State ===
// The data that I am working with, kept in JS memory
// The user should never see the state directly
// If a developer wants to see state, they can use the debugger or console
// Variables we're working w/ & functions to change those variables

const colors = ["red", "green", "blue"];
const sizes = ["small", "medium", "large"];
const shapes = [];

function addShape() {
  shapes.push({
    color: colors[0],
    size: sizes[0],
  });
}

// === Render ===
// Render = convert state into HTML so users can see the state in the document
// How do we transform our state variables into HTML?

function render() {
  // Take all my shapes and transform them into HTML
  const $shapes = shapes.map((shape) => {
    // Turn a single shape into HTML
    // $ is my personal convention to indicate that the variable
    // is a DOM variable & not a regular JS variable
    const $shape = document.createElement("li");
    // Add the shape's color and size as classes to the new element
    $shape.classList.add(shape.color, shape.size);
    return $shape;
  });

  {
    // The same logic using a for loop instead of map
    const $shapes = [];
    for (const shape of shapes) {
      const $shape = document.createElement("li");
      // Add the shape's color and size as classes to the new element
      $shape.classList.add(shape.color, shape.size);
      $shapes.push($shape);
    }
  }

  // Take the shape elements & bring them out onto the HTML so users can see these elements
  // Hey document, can you find in your model the element
  // that corresponds to the CSS selector #shapes
  const $shapeList = document.querySelector(".shapes");
  $shapeList.replaceChildren(...$shapes);
}

// === Script ===
// Let's call the functions we defined in the state & render sections

render();

// Set Interval = run the callback function every interval
// which is given in ms
setInterval(() => {
  addShape();
  render();
}, 1000);

/*
Data - UI Lifecycle
1. We have data in state.
2. We render the data in state to the UI.
3. Something causes the data to change, go to step 1.
*/
