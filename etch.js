let container = document.querySelector(".container");

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
}

function getSize() {
  gridSize = prompt("Enter size of square grid: ", 16);
  createGrid(gridSize);
}

getSize();

square.addEventListener("click", getColor);

function getColor(event) {
  let square = event.target;
  alert("Hello World");
  //   let square = document.querySelector("#innerSquare");
  //   let red = Math.floor(Math.random() * 256 + 1);
  //   let green = Math.floor(Math.random() * 256 + 1);
  //   let blue = Math.floor(Math.random() * 256 + 1);
  //   return (square.style.backgroundColor = `rgb(${red},${green},${blue})`);
}
