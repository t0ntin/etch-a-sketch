const container = document.querySelector("#container");
const numberOfSquares = prompt("enter a number between __ and __")


function createGrid() {
  for (let i = 0; i < 256; i++) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add("square");
    container.append(squareDiv);
  }
}

container.addEventListener("mouseover", (event) => {
  event.target.classList.add("hovered");
})

createGrid();