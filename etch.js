// Etch-a-sketch JS project
// Joban Dhindsa

let container = document.querySelector(".container");

// function to create initial grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("id", "entireRow");
    container.appendChild(row);

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.setAttribute("id", "innerSquare");
      square.classList.add("square");
      square.style.width = `${500 / gridSize}px`;
      square.style.height = `${500 / gridSize}px`;
      row.appendChild(square);
    }
  }
  getSquare();
}

// get grid size from user
function getSize() {
  gridSize = prompt("Enter size of square grid: ", 16);
  createGrid(gridSize);
}

getSize();

// add event listener on mouse over for each square in grid and change its color
// essentially this is the sketching function
function getSquare() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", () => {
      sq.style.backgroundColor = "black";
    });
  });
}
