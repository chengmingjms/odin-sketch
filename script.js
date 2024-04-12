var rows = 16;
const containerDiv = document.querySelector("#container");
for (var i = 0; i < rows; i++) {
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("insideContainer");
    containerDiv.appendChild(rowDiv);
    for (var j = 0; j < rows; j++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("square");
        rowDiv.appendChild(newDiv);
    }
}