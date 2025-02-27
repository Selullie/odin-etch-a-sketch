const container = document.querySelector("#container");

function createGrid(size) {
  let gridSize = size * size;
  let gridCellSize = (1 / size) * 100;
  for (let i = 0; i < gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = gridCellSize + "%";
    gridCell.style.height = gridCellSize + "%";
    gridCell.classList.add("gridCell");
    container.appendChild(gridCell);
  }
}
createGrid(16);
