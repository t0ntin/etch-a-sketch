const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const resetBtn = document.querySelector("#reset-btn");

const generateSquares = () => {
  let squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  container.append(squareDiv);
};

const adjustGrid = (numberOfSquares) => {
  container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
};

const checkGridSize = (numberOfSquares) => {
  let correctSize;
  if (numberOfSquares > 3 && numberOfSquares < 81) {
    correctSize = true;
  } else {
    correctSize = false;
    alert("You didn't enter the correct number");
  }
  return correctSize;
};

for (let i = 0; i < 256; i++) {
  generateSquares();
}

container.addEventListener("mouseover", (event) => {
  event.target.classList.add("hovered");
});

const changeGridSize = (numberOfSquares) => {
  let correctSize = checkGridSize(numberOfSquares);
  if (correctSize) {
    const totalSquares = numberOfSquares * numberOfSquares;
    for (let i = 0; i < totalSquares; i++) {
      generateSquares();
    }
  }
  adjustGrid(numberOfSquares);
};

gridSizeBtn.onclick = () => {
  const numberOfSquares = prompt("Enter a number between 4 and 80");
  changeGridSize(numberOfSquares);
};

resetBtn.onclick = (numberOfSquares) => {
  changeGridSize(16);
  adjustGrid(numberOfSquares);
};
