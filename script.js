const container = document.querySelector("#container");

let gridSize = 16;

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    gridRow.textContent = "Row!";
    container.appendChild(gridRow);

    for (let i = 1; i < size; i++) {
      const gridCol = document.createElement("div");
      gridCol.classList.add("gridCol");
      gridCol.textContent = "Col!";
      gridRow.appendChild(gridCol);
    }
  }
}

createGrid(gridSize);
