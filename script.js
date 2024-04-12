var rows = 16;
const containerDiv = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn")
newGridBtn.addEventListener("click", function () {
    var size = 0
    while (size < 1 | size > 100) {
        size = prompt("How big should the square be? (1-100)")
    }
    clearGrid()
    createGrid(size)
})
createGrid(rows)

function createGrid(rows) {
    for (var i = 0; i < rows; i++) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("insideContainer");
        containerDiv.appendChild(rowDiv);
        for (var j = 0; j < rows; j++) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.addEventListener("mouseover", function(e) {e.target.style.backgroundColor = "black"})
            rowDiv.appendChild(newDiv);
        }
    }
}

function clearGrid() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
    }
}