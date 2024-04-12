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
            newDiv.addEventListener("mouseover", function(e) {
                reduceOpacity()
                e.target.style.backgroundColor = "black";
                e.target.style.opacity = 1;
            })
            rowDiv.appendChild(newDiv);
        }
    }
}

function clearGrid() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
    }
}

function reduceOpacity() {
    var children = Array.from(containerDiv.childNodes)
    children.forEach(function (item) {
        var childrenChildren = Array.from(item.childNodes)
        childrenChildren.forEach(function (item) {
            item.style.opacity -= .05
        })
    })

}